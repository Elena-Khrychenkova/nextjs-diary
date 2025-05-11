import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import GitHubSignIn from "@/components/ui/github";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import { SignUpForm } from "@/components/signup-form";

export default async function SignUpPage() {
  const session = await auth();
  if (session) redirect("/home");
  const initialState = {
    message: "",
  };
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm initialState={initialState} />
      </div>
    </div>
  );
}
