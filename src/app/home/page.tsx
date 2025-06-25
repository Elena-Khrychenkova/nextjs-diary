import { auth } from "@/app/auth";
import { Button } from "@/components/ui/button";
import SignOut from "@/components/ui/signout";
import { redirect } from "next/navigation";
export default async function HomePage() {
  const session = await auth();
  if (!session) redirect("/login");
  return (
    // <div>
    //   <div>Welcome {session.user?.name}!</div>
    //   <SignOut />
    // </div>
    <div>
      <div className="flex items-center justify-center h-[520px] px-[170px] py-[60px] gap-[60px] bg-amber-500">
        <div className="flex flex-col w-[520px] h-[96px] gap-[24px] bg-green-300 ">
          <h1 className="font-bold text-[40px] h-[48px]">
            Welcome, {session.user?.name}!
          </h1>
          <p>Explore how your lifestyle choices impact your food intake.</p>
        </div>
        <div>
          <div className="bg-blue-300 w-[520px] h-[400px]">Hello</div>
        </div>
      </div>
      <div className="flex flex-col items-center h-[944px] border-t-2 border-b-2 border-gray-400  px-[170px] py-[60px] gap-[60px] bg-violet-300">
        <div className="flex flex-col items-center h-[168px] w-[1100px] gap-[24px] bg-amber-800 ">
          <h1 className="font-bold text-[40px] h-[48px]">Your Data Metrics</h1>
          <p>Explore how harious factors influence your food choices</p>
          <Button className="w-[240px] h-[48px]">View All Metrics</Button>
        </div>
      </div>
    </div>
  );
}
