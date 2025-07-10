import MoodChart from "@/components/mood-chart";
import ChartPieLegend from "@/components/pie-chart";
import { getMoodCounts } from "./mood-data";
import { getWaterStats } from "./water-data";
import { auth } from "@/app/auth";

export default async function ChartsPage() {
  const session = await auth();
  const moodCountsData = await getMoodCounts(session?.user?.email ?? "");
  const waterStats = await getWaterStats(session?.user?.email ?? "");
  return (
    <div className="flex flex-col mt-20 gap-4">
      <MoodChart data={moodCountsData} />
      <div className="flex justify-center">
        <ChartPieLegend data={waterStats} />
      </div>
    </div>
  );
}
