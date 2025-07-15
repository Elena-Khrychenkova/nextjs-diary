"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/app/auth";
import { useActionState } from "react";
import { createUser } from "@/app/actions";
import Link from "next/link";
import Image from "next/image";

export function SignUpForm({
  initialState,
}: {
  initialState: { message: string };
}) {
  const [state, formAction] = useActionState(createUser, initialState);
  return (
    <div
      className={cn(
        "flex flex-col gap-6 bg-[#F8F6F4] p-6 rounded-xl shadow-sm"
      )}
    >
      <form action={formAction}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-30 items-center justify-center rounded-md">
                <Image
                  src="/logo2.png"
                  className="rounded-[50%]"
                  width={200}
                  height={200}
                  alt="Food Diary Logo"
                />
              </div>
              <span className="sr-only">Food Diary</span>
            </a>
            <h1 className="text-xl font-bold">Welcome to Food Diary</h1>
            <div className="text-center text-sm">
              Have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                name="name"
                id="name"
                type="name"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input name="password" id="password" type="password" required />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#5025C5] hover:bg-[#3f1e9d] shadow-xl hover:shadow"
            >
              Sign Up
            </Button>
          </div>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-[#F8F6F4] text-muted-foreground relative z-10 px-2">
              Or
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
