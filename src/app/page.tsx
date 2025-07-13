"use client";

import { Button } from "@/components/ui/button";
import Diagram from "../../public/food_intake_diagram.svg";
import Image from "next/image";
import { Shadows_Into_Light } from "next/font/google";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const meals = [
    "/meals_image.jpg",
    "/meals_image222.jpg",
    "/meals_image333.jpg",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % meals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col">
      {/* first block */}
      <div className="flex gap-10 items-center justify-center h-[364px]">
        {/* Logo Image */}
        <div>
          <Image
            src="/logo2.png"
            className="rounded-[50%]"
            width={200}
            height={200}
            alt="Food Diary Logo"
          />
        </div>
        {/* Welcome Text */}
        <div className="flex flex-col h-[244px] w-[760px] max-w-[760px] justify-center space-y-4 text-gray-900">
          <div className="flex flex-col bg-[#F8F6F4] p-4 rounded-xl shadow-sm">
            <h1 className="text-3xl font-semibold leading-snug tracking-tight mb-4">
              Welcome to <span className="text-[#5025C5]">Food Diary</span>!
            </h1>
            <p className="text-base leading-relaxed">
              Track your food intake and health metrics
            </p>
            <p className="text-base leading-relaxed mb-2">
              Join us and start your journey towards healthier lifestyle
            </p>
            <div className="w-full border-t border-dotted border-[#5025C5]" />
            <p className="text-base leading-relaxed mt-2">
              With Food Diary, you can gain valuable insight into how your daily
              meals affect your energy, mood, sleep, and overall well-being. Our
              platform helps you build healthy habits through consistent
              tracking and simple visualizations. Whether you're working toward
              specific goals or just want to be more mindful of what you eat,
              Food Diary provides a clear and personalized picture of your
              progress. It`s your daily companion on the journey to a healthier,
              more balanced life.
            </p>
          </div>
        </div>
        {/* Register */}
        <div>
          <Button className="w-[160px] h-[48px] bg-[#5025C5] hover:bg-[#3f1e9d] shadow-xl hover:shadow">
            Register Now
          </Button>
        </div>
      </div>
      {/* second block */}
      <div className="relative h-[420px] flex justify-center border-b border-[#F8ECE9] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.06)]">
        <div className="w-[1100px] h-[300px] rounded-[10px] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.5),_0_-4px_6px_-2px_rgba(0,0,0,0.5)]">
          <Image
            src={meals[current]}
            className="rounded-[10px]"
            width={1100}
            height={300}
            alt="Carousel Of Meals"
          />
          <div className="absolute mt-4 left-1/2 -translate-x-1/2 flex gap-2">
            {meals.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === current ? "bg-[#5025C5]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* third block */}
      <div className="flex justify-center items-center gap-[60px] mt-[120px]">
        <Image
          src="/mood_image.png"
          width={520}
          height={324}
          alt="Mood Tracker Chart"
        />

        <div className="flex flex-col w-[520px] h-[373px] bg-[#F8F6F4] px-4 rounded-xl shadow-sm justify-center ">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[40px] font-bold leading-[48px]">
              Your Data Metrics
            </h1>
            <p>See how your emotions influence your eating habits</p>
            <Button className="w-[240px] h-[48px] bg-[#5025C5] hover:bg-[#3f1e9d] shadow-xl hover:shadow">
              View All Metrics
            </Button>
            <div className="flex flex-col">
              <p>
                Track mood patterns and observe how they correlate with the
                number of meals you eat each day.
              </p>
              <p>
                Use these insights to better understand emotional triggers and
                develop more mindful eating routines.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* fourth block */}
      <div className="border-b border-[#F8ECE9] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.06)] mt-[120px]">
        <div className="flex justify-center">
          <div className="flex h-[180px] w-[1100px] items-center justify-between">
            <div className="flex flex-col gap-[24px] w-[520px] justify-center bg-[#F8F6F4] px-4 rounded-xl shadow-sm">
              <h1 className="text-[40px] font-bold leading-[48px]">
                Log Your Data
              </h1>
              <p>Enter details about your daily food intake</p>
              <div>
                <p>
                  Keep track of what, when, and how much you eat to gain a
                  clearer picture of your habits.
                </p>
                <p>
                  Logging consistently helps you stay accountable and uncover
                  patterns in your nutrition over time.
                </p>
              </div>
            </div>
            <Button className="w-[160px] h-[48px] bg-[#5025C5] hover:bg-[#3f1e9d] shadow-xl hover:shadow">
              Complete the Form
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-[560px] flex flex-col gap-[24px] w-[1100px]">
            <div className="flex flex-col items-end  gap-[24px]">
              <div className="w-[520px] flex flex-col items-end bg-[#F8F6F4] px-4 rounded-xl shadow-sm">
                <h1 className="text-[40px] font-bold leading-[48px]">
                  Visualize Your Data
                </h1>
                <p>
                  Interactive charts displaying the correlation between food
                  intake and lifestyle factors
                </p>
              </div>
            </div>

            <div className="flex gap-[40px]">
              <Image
                src="/water_intake_image.png"
                width={528.5}
                height={440}
                alt="Water Intake Chart"
              />
              <Image
                src="/entries_per_day_image.png"
                width={528.5}
                height={440}
                alt="Meal Entries Per Day Chart"
              />
            </div>
          </div>
        </div>
      </div>
      {/* fifth block */}
      <div className="h-[770px] py-[60px] px-[170px] gap-[60px] flex flex-col items-center">
        <div className=" h-[168px] w-[1100px] gap-[24px] flex flex-col items-center">
          <h1 className="text-[40px] font-bold leading-[48px]">Insights</h1>
          <p>
            See how experts suggest balancing food with various lifestyle
            choices
          </p>
          <Button className="w-[160px] h-[48px]">View More</Button>
        </div>
        <div className="h-[422px] w-[600px] border border-gray-200 rounded-xl">
          <div className="flex items-center h-[74px] p-[12px]">
            <p>Title</p>
          </div>
          <div className="h-[300px] bg-[#F8ECE9] flex items-center justify-center">
            <p>Healthy Meal</p>
          </div>
          <div className="h-[48px] p-[12px]">
            <p>Balanced meals for a healthier life</p>
          </div>
        </div>
      </div>
    </div>
  );
}
