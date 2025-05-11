import { signIn, signOut } from "@/app/auth";
import { Button } from "./button";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button variant="outline" type="submit" className="w-full">
        Sign Out
      </Button>
    </form>
  );
}
