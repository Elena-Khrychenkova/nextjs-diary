import { auth } from "@/app/auth";
import { Button } from "@/components/ui/button";
import SignOut from "@/components/ui/signout";
import { redirect } from "next/navigation";
import Image from "next/image";
import MoodChart from "@/components/mood-chart";
import { getMoodCounts } from "./charts/mood-data";
export default async function HomePage() {
  const session = await auth();
  if (!session) redirect("/login");
  const moodCountsData = await getMoodCounts(session?.user?.email ?? "");
  return (
    // <div>
    //   <div>Welcome {session.user?.name}!</div>
    //   <SignOut />
    // </div>
    <div>
      <div className="flex items-center justify-center h-[520px] px-[170px] py-[60px] gap-[60px]">
        <div className="flex flex-col w-[520px] h-[96px] gap-[24px]">
          <h1 className="font-bold text-[40px] h-[48px]">
            Welcome, {session.user?.name}!
          </h1>
          <p>Explore how your lifestyle choices impact your food intake.</p>
        </div>
        <div>
          <div className="flex flex-col">
            <Image
              src="/pixeltrue-healthy-eating-1.svg"
              width={520}
              height={400}
              alt="Imafge of a woman"
            />
            <p className="flex justify-end text-sm">
              Illustration by&nbsp;
              <a href="https://icons8.com/illustrations/author/ARh4OKrFtdfC">
                Pixeltrue Ouch!
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center border-t-2 border-gray-200  px-[170px] py-[60px] gap-[60px]">
        <div className="flex flex-col items-center h-[168px] w-[1100px] gap-[24px]">
          <h1 className="font-bold text-[40px] h-[48px]">Your Data Metrics</h1>
          <p>Explore how harious factors influence your food choices</p>
          <Button className="w-[240px] h-[48px]">View All Metrics</Button>
        </div>
        <div>
          {/* <Image
            src="/food_intake_diagram.svg"
            width={1100}
            height={440}
            alt="Food Intake vs. Activities Diagram"
          /> */}
        </div>
        {/* <ol className="flex w-[1100px] h-[96px] justify-between">
          <li className="flex flex-col w-[353.33px] h-[96px] border border-gray-400 py-[16px] px-[16px] gap-[6px] rounded-xl">
            <p>Sleep</p>
            <p>6 hours</p>
          </li>
          <li className="flex flex-col w-[353.33px] h-[96px] border border-gray-400 py-[16px] px-[16px] gap-[6px] rounded-xl">
            <p>Sport</p>
            <p>2 hours</p>
          </li>
          <li className="flex flex-col w-[353.33px] h-[96px] border border-gray-400 py-[16px] px-[16px] gap-[6px] rounded-xl">
            <p>Hydration</p>
            <p>8 hours</p>
          </li>
        </ol> */}
      </div>
      <MoodChart data={moodCountsData} />
    </div>
  );
}
