import MoodChart from "@/components/mood-chart";
import ChartPieLegend from "@/components/pie-chart";
import { getMoodCounts } from "./mood-data";
import { getWaterStats } from "./water-data";
import { getWaterPortionStats } from "./water-portion-data";
import { getEntriesPerDay } from "./entries-data";
import { auth } from "@/app/auth";
import WaterPortionRadarChart from "@/components/radar-chart";
import { UserEntriesLineChart } from "@/components/entries-line-chart";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ChartsPage() {
  const session = await auth();
  if (!session) redirect("/login");
  const moodCountsData = await getMoodCounts(session?.user?.email ?? "");
  const waterStatsData = await getWaterStats(session?.user?.email ?? "");
  const waterPortionData = await getWaterPortionStats(
    session?.user?.email ?? ""
  );
  const entriesPerDayData = await getEntriesPerDay(session?.user?.email ?? "");
  return (
    <div className="relative overflow-hidden">
      {/*Coral Circle - Top Right */}
      <div className="hidden md:block absolute top-[-60px] right-[80px] z-0 animate-spin-slow">
        <svg
          viewBox="0 0 100 100"
          className="w-40 h-40 text-[#E06159] opacity-10"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
      </div>
      {/*Spiral Ring - Floating Right */}
      <div className="hidden md:block absolute top-[1%] right-[-80px] z-0 animate-float">
        <svg
          viewBox="0 0 100 100"
          className="w-60 h-60 opacity-10"
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
      {/* Triangle - Spinning Left */}
      <div className="hidden md:block absolute top-[30%] left-[-60px] z-0 animate-spin-slow">
        <svg
          viewBox="0 0 100 100"
          className="w-40 h-40 text-[#5025C5] opacity-10"
          fill="currentColor"
        >
          <polygon points="50,0 100,100 0,100" />
        </svg>
      </div>
      {/* Hexagon - Rigth */}
      <div className="hidden md:block absolute top-[50%] right-[-60px] z-0 animate-spin-slow">
        <svg
          viewBox="0 0 100 100"
          className="w-50 h-50 text-[#E06159] opacity-10"
          fill="currentColor"
        >
          <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
        </svg>
      </div>
      {/* Diamond - Bottom Left */}
      <div className="hidden md:block absolute bottom-[-60px] left-[-40px] z-0 animate-float">
        <svg
          viewBox="0 0 100 100"
          className="w-64 h-64 text-[#E06159] opacity-10 rotate-45"
          fill="currentColor"
        >
          <rect x="25" y="25" width="50" height="50" />
        </svg>
      </div>
      <div className="flex flex-col gap-24 py-[60px] px-[170px]">
        {/* Mood Tracker */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-6">
            Mood & Meals Correlation
          </h2>
          <div className="flex justify-between items-start gap-12">
            <div className="flex flex-col w-[60%]">
              <MoodChart data={moodCountsData} />
            </div>

            <div className="flex flex-col items-center w-[40%]">
              <div className="flex flex-col">
                <Image
                  src="/pixeltrue-teaching-1.svg"
                  width={520}
                  height={400}
                  alt="People learning"
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
              <p className="text-gray-700 bg-[#F8F6F4] p-4 rounded-xl shadow-sm">
                This chart helps you explore how your emotional state may
                influence your eating habits. It shows how often different moods
                are associated with the number of meals you`ve consumed in a
                day. By identifying these trends, you may begin to notice
                patterns, like increased snacking when feeling stressed or fewer
                meals when feeling low. Understanding this connection is
                valuable for making mindful food choices and improving overall
                well-being. The more data you log, the clearer the relationship
                becomes. Use this insight to support emotional balance and build
                a healthier routine.
              </p>
            </div>
          </div>
        </div>
        {/* Water vs portion & entries*/}
        <div className="flex justify-between items-start gap-12">
          <div className="flex flex-col gap-8 w-[50%]">
            <div className="bg-[#F8F6F4] p-4 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">
                Water & Portion Size Relationship
              </h2>
              <p className="text-base text-gray-700">
                This chart visualizes the potential link between drinking a
                glass of water before a meal and the portion size consumed.
                Hydration before eating is often recommended to reduce
                overeating, and this data may help validate if that holds true
                for you. By comparing water intake events with meal sizes, you
                can see whether smaller portions tend to follow a glass of
                water. This insight supports building mindful pre-meal habits
                and encourages self-awareness about hunger cues. If patterns
                emerge, you can use them to inform portion control strategies.
                The goal is to help you eat more intentionally, not less.
              </p>
            </div>
            <WaterPortionRadarChart data={waterPortionData} />
          </div>

          <div className="flex flex-col gap-8 w-[50%]">
            <UserEntriesLineChart data={entriesPerDayData} />
            <div className="bg-[#F8F6F4] p-4 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">
                Daily Entry Tracking
              </h2>
              <p className="text-base text-gray-700">
                Tracking your daily habits consistently is the foundation of
                meaningful data analysis. This line chart illustrates how many
                entries you`ve made each day over the past week. Gaps or dips in
                the data may indicate missed tracking opportunities or off-days
                in your routine. By staying consistent, you ensure that your
                insights are accurate and actionable. This chart serves as both
                a self-accountability tool and a motivation booster. The more
                complete your data, the better your understanding of your food
                and lifestyle patterns.
              </p>
            </div>
          </div>
        </div>
        {/* Water Stats */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-6">
            Water Intake Frequency
          </h2>
          <div className="flex justify-between items-start gap-12">
            <div className="flex flex-col w-[50%]">
              <ChartPieLegend data={waterStatsData} />
            </div>
            <div className="w-[50%] ">
              <p className="text-base text-gray-700 bg-[#F8F6F4] p-4 rounded-xl shadow-sm">
                This pie chart shows how often you drink water before meals,
                helping you gauge consistency with a key hydration habit.
                Drinking water before eating is a small yet impactful behavior
                that may aid digestion, curb overeating, and improve overall
                hydration. The chart segments your water intake behavior into
                easy-to-understand categories. It encourages you to reflect on
                how frequently you`re meeting this goal. As trends become
                visible, you can make informed choices to improve your daily
                hydration practices. Regular water intake is a simple step that
                can lead to lasting health benefits.
              </p>
              <div className="flex flex-col items-end">
                <Image
                  src="/pixeltrue-data-analysis.svg"
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
      </div>
    </div>
  );
}
