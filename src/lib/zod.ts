import { object, string, z } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(3, "Password must be more than 3 characters")
    .max(32, "Password must be less than 32 characters"),
});

// date, mood, activity, water, foodType, portionSize, sleep, weight
export const formSchema = z.object({
  user_email: z.string().email(),
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
