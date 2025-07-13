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

export default async function ChartsPage() {
  const session = await auth();
  const moodCountsData = await getMoodCounts(session?.user?.email ?? "");
  const waterStatsData = await getWaterStats(session?.user?.email ?? "");
  const waterPortionData = await getWaterPortionStats(
    session?.user?.email ?? ""
  );
  const entriesPerDayData = await getEntriesPerDay(session?.user?.email ?? "");
  return (
    <div className="flex flex-col mt-20 gap-4 ">
      <div className="flex justify-center">
        <MoodChart data={moodCountsData} />
        <div className="flex flex-col">
          <Image
            src="/pixeltrue-teaching-1.svg"
            width={520}
            height={400}
            alt="Image of a woman and man"
          />
          <p className="flex justify-center text-sm">
            Illustration by&nbsp;
            <a href="https://icons8.com/illustrations/author/ARh4OKrFtdfC">
              Pixeltrue Ouch!
            </a>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <WaterPortionRadarChart data={waterPortionData} />
        <UserEntriesLineChart data={entriesPerDayData} />
      </div>
      <div className="flex justify-center">
        <ChartPieLegend data={waterStatsData} />
        <div className="flex flex-col">
          <Image
            src="/pixeltrue-data-analysis.svg"
            width={520}
            height={400}
            alt="Image of a woman"
          />
          <p className="flex justify-center text-sm">
            Illustration by&nbsp;
            <a href="https://icons8.com/illustrations/author/ARh4OKrFtdfC">
              Pixeltrue Ouch!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
