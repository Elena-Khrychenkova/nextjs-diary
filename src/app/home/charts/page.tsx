import MoodChart from "@/components/mood-chart";
import { getMoodCounts } from "./mood-data";

export default async function ChartsPage() {
  const data = await getMoodCounts();
  return (
    <div className="mt-20">
      <MoodChart data={data} />
    </div>
  );
}
