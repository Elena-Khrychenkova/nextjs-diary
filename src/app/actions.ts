"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import postgres from "postgres";
import { redirect } from "next/navigation";

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

// date, mood, activity, water, foodType, portionSize, sleep, weight
export const formSchema = z.object({
  date: z.string(), //later z.date() for date picker
  mood: z.enum(["Happy", "Neutral", "Sad", "Stressed", "Tired", "Energetic"]),
  activity: z.enum(["None", "Medium", "High"]),
  water: z.enum(["Yes", "No"]),
  foodType: z.array(
    // z.enum([
    //   "Vegetables",
    //   "Fruits",
    //   "Dairy",
    //   "Meat",
    //   "Fish",
    //   "Grain",
    //   "Sweets",
    //   "Fast Food",
    //   "Processed",
    //   "Homemade",
    // ])
    z.string().min(1)
  ),
  portionSize: z.enum(["Small", "Medium", "Large", "Extra Large"]),
  sleep: z.enum(["Less than 6", "6-7", "7-8", "More than 8"]),
  weight: z.enum(["Down", "Same", "Up"]),
});

export async function createFoodIntakeLog(prevState: any, formData: FormData) {
  const data = {
    date: formData.get("date"),
    mood: formData.get("mood"),
    activity: formData.get("activity"),
    water: formData.get("water"),
    foodType: formData.get("foodType"),
    portionSize: formData.get("portionSize"),
    sleep: formData.get("sleep"),
    weight: formData.get("weight"),
  };

  const parsed = formSchema.safeParse(data);
  if (!parsed.success) {
    return { message: "Validation failed" };

    //processing data

    return { message: "Submitted" };
  }
}
