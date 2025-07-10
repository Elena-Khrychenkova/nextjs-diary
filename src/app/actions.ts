"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import postgres from "postgres";
import { redirect } from "next/navigation";
import { formSchema } from "@/lib/zod";

if (!process.env.DB_URL) {
  throw new Error("DB_URL is not found");
}

const sql = postgres(process.env.DB_URL!);

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
    await sql`
              INSERT INTO users (name, email, password)
              VALUES (${data.name}, ${data.email}, ${data.password})
          `;
  } catch (error) {
    return { message: "Failed to create a user" };
  }
  revalidatePath("/login");
  redirect("/login");
}

export async function createFoodIntakeLog(prevState: any, formData: FormData) {
  const data = formSchema.parse({
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
  console.log("Received data", data);
  try {
    await sql`INSERT INTO food_intake(user_email, date, mood, activity, water, food_type, portion, sleep, weight)
    VALUES(${data.user_email}, ${data.date}, ${data.mood}, ${data.activity}, ${data.water}, ${data.foodType}, ${data.portionSize}, ${data.sleep}, ${data.weight})`;
  } catch (error) {
    console.log("Error inserting food intake log: ", error);
    return {
      message: "Failed to creat a food intake log ",
      error: String(error),
    };
  }
  revalidatePath("/home");
  redirect("/home");
}
