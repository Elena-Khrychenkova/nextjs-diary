"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

function reshapeRadarData(
  rawData: { portion: string; water: "Yes" | "No"; count: number }[]
): { portion: string; Yes?: number; No?: number }[] {
  const grouped = new Map<
    string,
    { portion: string; Yes?: number; No?: number }
  >();

  for (const entry of rawData) {
    if (!grouped.has(entry.portion)) {
      grouped.set(entry.portion, { portion: entry.portion, Yes: 0, No: 0 });
    }
    grouped.get(entry.portion)![entry.water] = entry.count;
  }
  return Array.from(grouped.values());
}

export default function WaterPortionRadarChart({
  data,
}: {
  data: { portion: string; water: "Yes" | "No"; count: number }[];
}) {
  const transformedData = reshapeRadarData(data);
  const chartConfig: ChartConfig = {
    Yes: { label: "Drank Water", color: "#4ade80" },
    No: { label: "Didn't Drink", color: "#f87171" },
  };
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="items-center pb-4">
        <CardTitle>Water & Portion Radar</CardTitle>
        <CardDescription>
          Showing water intake across portion sizes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart
            data={transformedData}
            margin={{
              top: -40,
              bottom: -10,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="portion" />
            <PolarGrid />
            <Radar dataKey="Yes" fill="#4ade80" fillOpacity={0.5} />
            <Radar dataKey="No" fill="#f87171" />
            <ChartLegend className="mt-8" content={<ChartLegendContent />} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 pt-4 text-sm">
        <div className="text-muted-foreground flex items-center gap-2 leading-none">
          Portion vs Hydration
        </div>
      </CardFooter>
    </Card>
  );
}
