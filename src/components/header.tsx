import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex justify-between h-[80px] items-center bg-[#FAFAFA] shadow-md sticky top-0 z-10">
      {/* Avatar and Logo */}
      <div className="flex items-center">
        <Avatar className="w-[80px] h-[80px]">
          <AvatarImage src="/logo2.png" />
          <AvatarFallback>FD</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-bold bg-gradient-to-r from-[#E06159] to-[#5025C5] text-transparent bg-clip-text leading-[32px]">
          Food Diary
        </h1>
      </div>
      {/* Sign Up */}
      <div>
        <Button className="mr-4 bg-[#5025C5] hover:bg-[#3f1e9d] shadow-lg hover:shadow">
          Sign In
        </Button>
      </div>
    </header>
  );
}
