"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import postgres from "postgres";
import { redirect } from "next/navigation";
import { formSchema } from "@/lib/zod";
import bcrypt from "bcryptjs";
import OpenAI from "openai";

if (!process.env.DB_URL) {
  throw new Error("DB_URL is not found");
}

const sql = postgres(process.env.DB_URL!);

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function createUser(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().nonempty(),
    email: z.string().nonempty(),
    password: z.string().nonempty(),
  });
  const data = schema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    await sql`
              INSERT INTO users (name, email, password)
              VALUES (${data.name}, ${data.email}, ${hashedPassword})
          `;
  } catch (error) {
    return { message: "Failed to create a user" };
  }
  revalidatePath("/login");
  redirect("/login");
}

export async function createFoodIntakeLog(prevState: any, formData: FormData) {
  const result = formSchema.safeParse({
    user_email: formData.get("user_email"),
    date: formData.get("date"),
    mood: formData.get("mood"),
    activity: formData.get("activity"),
    water: formData.get("water"),
    foodType: formData.getAll("foodType"),
    portionSize: formData.get("portionSize"),
    sleep: formData.get("sleep"),
    weight: formData.get("weight"),
  });
  // console.log("Received data", result);
  if (!result.success) {
    return {
      status: "error",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const data = result.data;
  try {
    await sql`INSERT INTO food_intake(user_email, date, mood, activity, water, food_type, portion, sleep, weight)
    VALUES(${data.user_email}, ${data.date}, ${data.mood}, ${data.activity}, ${data.water}, ${data.foodType}, ${data.portionSize}, ${data.sleep}, ${data.weight})`;
  } catch (error) {
    // console.log("Error inserting food intake log: ", error);
    return {
      status: "error",
      message: "Failed to creat a food intake log ",
      error: String(error),
    };
  }
  revalidatePath("/home");
  // redirect("/home");
  return {
    status: "success",
  };
}

export type WeeklyInsight = {
  patterns: string[];
  suggestions: string[];
  summary: string;
};

type FoodEntryForAI = {
  date: string;
  mood: string;
  activity: string;
  water: string;
  foodType: string[];
  portion: string;
  sleep: string;
  weight: string;
  // user_email: string;
};

function isWeeklyInsignt(data: any): data is WeeklyInsight {
  if (!data || typeof data !== "object") return false;
  const value = data as WeeklyInsight;
  return (
    Array.isArray(value.patterns) &&
    Array.isArray(value.suggestions) &&
    typeof value.summary === "string"
  );
}

async function getLast7DaysEntries(
  user_email: string,
): Promise<FoodEntryForAI[]> {
  const rows = await sql`
  SELECT date, mood, activity, water, food_type, portion, sleep, weight
  FROM food_intake
  WHERE user_email = ${user_email}
  ORDER BY date DESC
  LIMIT 7
  `;

  return rows.map((row: any) => ({
    date: row.date.toISOString().split("T")[0],
    mood: row.mood,
    activity: row.activity,
    water: row.water,
    foodType: row.food_type,
    portion: row.portion,
    sleep: row.sleep,
    weight: row.weight,
  }));
}

export async function getWeeklyInsight(
  user_email: string,
): Promise<WeeklyInsight> {
  if (!user_email) {
    throw new Error("User email is required");
  }

  const entries = await getLast7DaysEntries(user_email);

  if (!entries.length) {
    return {
      patterns: [],
      suggestions: [],
      summary: "No food entries were found for the last 7 days.",
    };
  }
  const prompt = `You are a supportive food habit analysis assistant.

Analyze the user's last 7 days of food diary entries.

Return ONLY valid JSON in this exact shape:
{
  "patterns": ["...", "...", "..."],
  "suggestions": ["...", "..."],
  "summary": "..."
}

Rules:
- Base your answer only on the provided data.
- Do not invent facts that are not visible in the data.
- Do not diagnose or give medical advice.
- Keep the tone gentle, supportive, and practical.
- Patterns should be short and specific.
- Suggestions should be realistic and non-judgmental.
- Summary should be exactly one sentence.

Data:
${JSON.stringify(entries, null, 2)}`;

  const response = await client.responses.create({
    model: "gpt-5.4",
    input: prompt,
  });
  const text = response.output_text;
  const parsed = JSON.parse(text);
  if (!isWeeklyInsignt(parsed)) {
    throw new Error("Invalid response format");
  }
  return parsed;
}
