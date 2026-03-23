"use client";

import { useState, useTransition } from "react";
import { getWeeklyInsight } from "@/app/actions";
import { Button } from "@/components/ui/button";

export default function WeeklyInsight({ user_email }: { user_email: string }) {
  const [data, setData] = useState<any>(null);
  const [isPending, startTransition] = useTransition();

  const handleAnalyze = () => {
    startTransition(async () => {
      const result = await getWeeklyInsight(user_email);
      setData(result);
      console.log(result);
    });
  };

  return (
    <div>
      <Button onClick={handleAnalyze}>
        {isPending ? "Analyzing..." : "Analyze my last 7 days"}
      </Button>
      <p className="text-gray-700 bg-[#F8F6F4] p-4 rounded-xl shadow-sm">
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </p>
    </div>
  );
}
