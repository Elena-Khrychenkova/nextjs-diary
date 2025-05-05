import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex justify-between h-[80px] bg-amber-400 items-center">
      {/* Avatar and Logo */}
      <div className="flex items-center">
        <Avatar className="mx-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>Food Diary</h1>
      </div>
      {/* Sign Up */}
      <div>
        <Button className="mr-4">Sign Up</Button>
      </div>
    </div>
  );
}
