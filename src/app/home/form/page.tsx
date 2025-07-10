import { auth } from "@/app/auth";
import FoodIntakeForm from "@/components/food-intake-form";

export default async function FormPage() {
  const session = await auth();

  return <FoodIntakeForm initialState={{ message: "" }} session={session} />;
}
