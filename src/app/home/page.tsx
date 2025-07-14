import { auth } from "@/app/auth";
import { Button } from "@/components/ui/button";
import SignOut from "@/components/ui/signout";
import { redirect } from "next/navigation";
import Image from "next/image";
import MoodChart from "@/components/mood-chart";
import { getMoodCounts } from "./charts/mood-data";
import { HeartHandshake, Smile } from "lucide-react";
export default async function HomePage() {
  const session = await auth();
  if (!session) redirect("/login");
  const moodCountsData = await getMoodCounts(session?.user?.email ?? "");
  return (
    <div>
      <div className="relative overflow-hidden border-b border-[#F8ECE9] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.06)]">
        {/* Spiral Ring - Top Left */}
        <div className="hidden md:block absolute top-[-60px] left-[80px] z-0 animate-spin-slow">
          <svg
            viewBox="0 0 100 100"
            className="w-60 h-60 opacity-10"
            fill="none"
            stroke="#E06159"
            strokeWidth="4"
          >
            <path
              d="M50,10 
             A40,40 0 1,1 49.9,10.01 
             M50,25 
             A25,25 0 1,0 50.1,25.01"
            />
          </svg>
        </div>

        {/* Purple Circle - Floating Left */}
        <div className="hidden md:block absolute top-[10%] left-[-60px] z-0 animate-float">
          <svg
            viewBox="0 0 100 100"
            className="w-64 h-64 text-[#5025C5] opacity-10"
            fill="currentColor"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>
        <div className="flex items-center justify-center h-[520px]">
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center gap-2">
              <h1 className="font-bold text-[40px] ">
                Welcome back, {session.user?.name}!
              </h1>
              <HeartHandshake className="w-8 h-8 text-[#5025C5]" />
            </div>
            <p className="text-[18px] text-gray-700">
              Ready to track your habits and discover what makes you feel your
              best?
            </p>
            <p>
              Every small step you take today builds a healthier, more balanced
              tomorrow.
            </p>
            <p>
              Start now to gain insights, boost your energy, and take control of
              your well-being - one entry at a time.
            </p>
          </div>
          <div>
            <div className="flex flex-col">
              <Image
                src="/pixeltrue-healthy-eating-1.svg"
                width={520}
                height={400}
                alt="Image of a woman"
              />
              <p className="flex justify-end text-xs text-gray-500 italic">
                Illustration by&nbsp;
                <a
                  href="https://icons8.com/illustrations/author/ARh4OKrFtdfC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#5025C5] hover:text-[#e06159]"
                >
                  Pixeltrue Ouch!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        {/* Coral Circle - Floating Right */}
        <div className="hidden md:block absolute top-[1%] right-[-80px] z-0 animate-float">
          <svg
            viewBox="0 0 100 100"
            className="w-60 h-60 text-[#E06159] opacity-10"
            fill="currentColor"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>

        {/* Hexagon - Bottom Left */}
        <div className="hidden md:block absolute bottom-[-80px] left-[40px] z-0 animate-spin-slow">
          <svg
            viewBox="0 0 100 100"
            className="w-64 h-64 text-[#E06159] opacity-10"
            fill="currentColor"
          >
            <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
          </svg>
        </div>
        {/* Spiral Ring - Top Right */}
        <div className="hidden md:block absolute top-[-60px] right-[80px] z-0 animate-spin-slow">
          <svg
            viewBox="0 0 100 100"
            className="w-40 h-40 opacity-10"
            fill="none"
            stroke="#5025C5"
            strokeWidth="4"
          >
            <path
              d="M50,10 
             A40,40 0 1,1 49.9,10.01 
             M50,25 
             A25,25 0 1,0 50.1,25.01"
            />
          </svg>
        </div>
        {/* Diamond - Bottom Right */}
        <div className="hidden md:block absolute bottom-[-60px] right-[-40px] z-0 animate-float">
          <svg
            viewBox="0 0 100 100"
            className="w-64 h-64 text-[#5025C5] opacity-10 rotate-45"
            fill="currentColor"
          >
            <rect x="25" y="25" width="50" height="50" />
          </svg>
        </div>
        <div className="flex flex-col items-center px-[170px] py-[60px] gap-[60px]">
          <div className="flex flex-col items-center w-[1100px] bg-[#F8F6F4] p-4 rounded-xl shadow-sm">
            <h1 className="font-bold text-[40px] h-[48px] mb-[12px]">
              Your Data Metrics
            </h1>
            <div className="w-full border-t border-dotted border-[#5025C5]" />
            <p className="text-[16px] text-gray-700 mt-[12px]">
              Explore how various lifestyle factors influence your food choices
              and well-being.
            </p>
            <p className="text-[16px] text-gray-700 mb-[24px]">
              With each entry, you're building a clearer picture of what helps
              you thrive. Let Food Diary be your personal guide toward a more
              intentional, empowered lifestyle.
            </p>
            <Button className="w-[240px] h-[48px]  bg-[#5025C5] hover:bg-[#3f1e9d] shadow-xl hover:shadow">
              View All Metrics
            </Button>
          </div>
          <MoodChart data={moodCountsData} />
        </div>
      </div>
    </div>
  );
}
