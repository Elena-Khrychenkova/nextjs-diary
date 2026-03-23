"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { getWeeklyInsight, WeeklyInsight } from "@/app/actions";
import { Button } from "@/components/ui/button";

export default function WeeklyInsightComponent({
  user_email,
}: {
  user_email: string;
}) {
  const [data, setData] = useState<WeeklyInsight | null>(null);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleAnalyze = () => {
    setError("");
    startTransition(async () => {
      try {
        const result = await getWeeklyInsight(user_email);
        setData(result);
        console.log(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      }
    });
  };

  //build the text only when data changes
  const fullText = useMemo(() => {
    if (!data) return "";
    const patterns = data.patterns.map((p) => `• ${p}`).join("\n");
    const suggestions = data.suggestions.map((s) => `• ${s}`).join("\n");

    return `**Patterns**\n${patterns}\n\n**Suggestions**\n${suggestions}\n\n**Summary**\n${data.summary}`;
  }, [data]);

  //typing effect
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!fullText) {
      setTypedText("");
      return;
    }

    let index = 0;

    const interval = setInterval(() => {
      index++;
      setTypedText(fullText.slice(0, index));

      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 18);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="flex flex-col items-center gap-6">
      <Button
        className="w-[160px] h-[48px] bg-[#5025C5] hover:bg-[#3f1e9d] shadow-xl hover:shadow"
        onClick={handleAnalyze}
        disabled={isPending}
      >
        {isPending ? "Analyzing..." : "Analyze my last 7 days"}
      </Button>

      {/*error*/}
      {error && <p className="text-red-500">{error}</p>}

      {/*result Box, appears after click*/}
      {data && (
        <div className="w-full max-w-2xl text-gray-700 bg-[#F8F6F4] p-4 rounded-xl shadow-sm whitespace-pre-line min-h-[200px]">
          {typedText}
          {/*blinking cursor*/}
          {typedText.length < fullText.length && (
            <span className="animate-pulse">|</span>
          )}
        </div>
      )}
    </div>
  );
}
