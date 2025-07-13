"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LandingPage() {
  const meals = [
    "/meals_image.jpg",
    "/meals_image222.jpg",
    "/meals_image333.jpg",
  ];
  const [current, setCurrent] = useState(0);

  const cards = [
    {
      title:
        "Can Food Influence Your Mood? Exploring the Link Between Diet and Depression",
      description:
        "From stress eating to the Mediterranean diet, this article explores the complex relationship between what we eat and how we feel. Learn what current research says about dietary patterns and the potential connection to depression and mental health.",
      image: "/article_image1.jpg",
      link: "https://www.health.harvard.edu/mind-and-mood/food-and-mood-is-there-a-connection",
    },
    {
      title: "Do You Really Need 8 Glasses of Water per Day?",
      description:
        "Is the “8 glasses a day” rule fact or fiction? This article breaks down the science of hydration, where the myth came from, and why your body is better at regulating water needs than you think. Learn how much water you actually need and when it really matters.",
      image: "/article_image2.jpg",
      link: "https://www.mcgill.ca/oss/article/health-nutrition/water-myth",
    },
    {
      title:
        "How Much Protein Do You Really Need? The Truth Behind High-Protein Diets",
      description:
        "High-protein diets are everywhere—from Paleo to protein shakes—but how much is too much? This article explores the health benefits and risks of protein, how much your body actually needs, and why moderation matters for long-term wellness.",
      image: "/article_image3.jpg",
      link: "https://www.bbc.co.uk/food/articles/should_you_worry_about_how_much_protein_you_eat",
    },
  ];
  const [cardsCurrent, setCardsCurrent] = useState(0);
  const next = () => setCardsCurrent((prev) => (prev + 1) % cards.length);
  const prev = () =>
    setCardsCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  const currentCard = cards[cardsCurrent];

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
      <div className="border-b border-[#F8ECE9] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.06)] mt-[60px]">
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
          <div className="h-[560px] flex flex-col gap-[60px] w-[1100px]">
            <div className="flex flex-col items-end ">
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
      <div className="relative overflow-hidden">
        {/* Left-side circle */}
        {/* <div className="absolute left-[-80px] top-[20%] z-0 animate-pulse-slow">
          <svg
            viewBox="0 0 100 100"
            fill="#5025C5"
            opacity="0.4"
            className="w-48 h-48"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div> */}

        {/* Right-side triangle */}
        {/* <div className="absolute right-[-60px] top-[30%] z-0 animate-spin-slow">
          <svg
            viewBox="0 0 100 100"
            fill="#E06159"
            opacity="0.15"
            className="w-48 h-48"
          >
            <polygon points="50,0 100,100 0,100" />
          </svg>
        </div> */}

        {/* Spiral Ring - Top Left */}
        <div className="hidden md:block absolute top-[-60px] left-[80px] z-0 animate-spin-slow">
          <svg
            viewBox="0 0 100 100"
            className="w-60 h-60 opacity-10"
            fill="none"
            stroke="#E06159"
            strokeWidth="4"
          >
            <path
              d="M50,10 
             A40,40 0 1,1 49.9,10.01 
             M50,25 
             A25,25 0 1,0 50.1,25.01"
            />
          </svg>
        </div>

        {/* Purple Circle - Floating Left */}
        <div className="hidden md:block absolute top-[10%] left-[-60px] z-0 animate-float">
          <svg
            viewBox="0 0 100 100"
            className="w-64 h-64 text-[#5025C5] opacity-10"
            fill="currentColor"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>

        {/* Coral Circle - Floating Left  */}
        <div className="hidden md:block absolute top-[6%] right-[-80px] z-0 animate-float">
          <svg
            viewBox="0 0 100 100"
            className="w-84 h-84 text-[#E06159] opacity-10"
            fill="currentColor"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>

        {/* Hexagon - Bottom Left */}
        <div className="hidden md:block absolute bottom-[-80px] left-[40px] z-0 animate-spin-slow">
          <svg
            viewBox="0 0 100 100"
            className="w-64 h-64 text-[#E06159] opacity-10"
            fill="currentColor"
          >
            <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
          </svg>
        </div>
        {/* Spiral Ring - Top Right */}
        <div className="hidden md:block absolute top-[-60px] right-[80px] z-0 animate-spin-slow">
          <svg
            viewBox="0 0 100 100"
            className="w-40 h-40 opacity-10"
            fill="none"
            stroke="#5025C5"
            strokeWidth="4"
          >
            <path
              d="M50,10 
             A40,40 0 1,1 49.9,10.01 
             M50,25 
             A25,25 0 1,0 50.1,25.01"
            />
          </svg>
        </div>
        {/* Diamond - Bottom Right */}
        <div className="hidden md:block absolute bottom-[-60px] right-[-40px] z-0 animate-float">
          <svg
            viewBox="0 0 100 100"
            className="w-64 h-64 text-[#5025C5] opacity-10 rotate-45"
            fill="currentColor"
          >
            <rect x="25" y="25" width="50" height="50" />
          </svg>
        </div>
        <div className=" mt-[60px] mb-[120px] gap-[24px] flex flex-col items-center">
          <div className="w-[600px] flex flex-col items-center bg-[#F8F6F4] py-4 px-4 rounded-xl shadow-sm">
            <h1 className="text-[40px] font-bold leading-[48px]">Insights</h1>
            <p className="mt-4 mb-2">
              Discover how food connects with mood, energy, sleep, and other
              lifestyle factors.
            </p>
            <div className="w-full border-t border-dotted border-[#5025C5]" />
            <p className="px-4 mt-2">
              We`ve gathered thought-provoking articles and practical guides
              from trusted sources. Whether you're curious about nutrition
              science or looking for simple tips, there's something here for
              everyone.
            </p>
          </div>
          <div className="relative w-[600px] mx-auto">
            <Card className="w-full h-full flex flex-col">
              <CardHeader className="mt-6">
                <CardTitle className="text-[#5025c5]">
                  {currentCard.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex">
                <div className="relative h-[280px] w-full">
                  <Image
                    src={currentCard.image}
                    alt={currentCard.title}
                    fill
                    className="object-cover rounded-xl shadow-2xl"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between p-4 gap-6">
                <p className="text-sm text-gray-600">
                  {currentCard.description}
                </p>
                <Button
                  asChild
                  className="bg-[#5025C5] hover:bg-[#3f1e9d] shadow-xl hover:shadow"
                >
                  <a
                    href={currentCard.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </Button>
              </CardFooter>
            </Card>
            {/* Cards Navigation */}
            <button
              onClick={prev}
              className="absolute top-1/2 left-[-60px] -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 hover:shadow"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 right-[-60px] -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100  hover:shadow"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
