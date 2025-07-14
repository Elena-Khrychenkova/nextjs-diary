"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { TrendingUp } from "lucide-react";
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Cell } from "recharts";

export default function MoodChart({ data }: { data: any }) {
  const chartConfig = {
    count: {
      label: "Meals",
    },
  };
  const colors = [
    "#5025c5",
    "#e06159",
    "#fbbf24",
    "#34d399",
    "#a855f7",
    "#60a5fa",
    "#f472b6",
  ];
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Mood Tracker</CardTitle>
        <CardDescription>How your meals relate to moods</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="mood" tickLine={false} tickMargin={10} />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="count" fill="#818cf8" radius={4}>
              {data.map((_: any, index: any) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total mood entries
        </div>
      </CardFooter>
    </Card>
  );
}
