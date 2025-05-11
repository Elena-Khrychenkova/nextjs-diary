import { auth } from "@/app/auth";
import SignOut from "@/components/ui/signout";
import { redirect } from "next/navigation";
export default async function HomePage() {
  const session = await auth();
  if (!session) redirect("/login");
  return (
    <div>
      <div>Welcome {session.user?.name}!</div>
      <SignOut />
    </div>
  );
}
