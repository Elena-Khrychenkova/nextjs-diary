import { signOut } from "@/app/auth";
import { Button } from "./button";

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button
        type="submit"
        className="mr-4 bg-[#5025C5] hover:bg-[#3f1e9d] shadow-lg hover:shadow"
      >
        Sign Out
      </Button>
    </form>
  );
}
