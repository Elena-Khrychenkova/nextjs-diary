import MoodChart from "@/components/mood-chart";
import ChartPieLegend from "@/components/pie-chart";
import { getMoodCounts } from "./mood-data";
import { getWaterStats } from "./water-data";
import { getWaterPortionStats } from "./water-portion-data";
import { auth } from "@/app/auth";
import WaterPortionRadarChart from "@/components/radar-chart";

export default async function ChartsPage() {
  const session = await auth();
  const moodCountsData = await getMoodCounts(session?.user?.email ?? "");
  const waterStatsData = await getWaterStats(session?.user?.email ?? "");
  const waterPortionData = await getWaterPortionStats(
    session?.user?.email ?? ""
  );
  return (
    <div className="flex flex-col mt-20 gap-4">
      <MoodChart data={moodCountsData} />
      <div className="flex flex-col justify-center">
        <ChartPieLegend data={waterStatsData} />
        <WaterPortionRadarChart data={waterPortionData} />
      </div>
    </div>
  );
}
