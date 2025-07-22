"use client";
import { Button } from "./button";
import { redirect } from "next/navigation";

export default function SignInButton() {
  const handleSignIn = () => {
    redirect("/login");
  };
  return (
    <Button
      className="mr-4 bg-[#5025C5] hover:bg-[#3f1e9d] shadow-lg hover:shadow"
      onClick={handleSignIn}
    >
      Sign In
    </Button>
  );
}
