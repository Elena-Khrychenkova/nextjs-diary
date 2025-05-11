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
