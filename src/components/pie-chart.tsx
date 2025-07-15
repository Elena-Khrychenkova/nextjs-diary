"use client";

import { Cell, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a legend";

export default function ChartPieLegend({ data }: { data: any[] }) {
  const chartConfig: ChartConfig = {
    value: { label: "Entries" },
    "water-Yes": { label: "Drank Water", color: "#4ade80" },
    "water-No": { label: "Didn't Drink", color: "#f87171" },
  };
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="items-center pb-0">
        <CardTitle>Water Intake</CardTitle>
        <CardDescription>
          How often you drank water before meals
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="key" label>
              {data.map((entry) => (
                <Cell key={entry.key} fill={entry.fill} />
              ))}
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="key" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
