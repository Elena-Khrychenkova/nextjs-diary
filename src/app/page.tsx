import { Button } from "@/components/ui/button";
import Diagram from "../../public/food_intake_diagram.svg";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col ">
      {/* first block */}
      <div className="flex gap-10 items-center justify-center px-42.5 h-[364px]">
        {/* Logo Image */}
        <div>
          <Image
            src="/logo2.png"
            className="rounded-[50%]"
            width={200}
            height={200}
            alt="Food Intake Trend"
          />
        </div>
        {/* Welcome Text */}
        <div className="flex flex-col h-[244px] w-[760px] justify-center">
          <div className="flex flex-col ">
            <h1 className="text-[24px] font-bold leading-[32px]">
              Welcome to Food Diary!
            </h1>
            <p className="text-[16px] font-normal leading-[24px] mt-4">
              Track your food intake and health metrics
            </p>
            <p className="text-[16px] font-normal leading-[24px] mb-4">
              Join us and start your journey towards healthier lifestyle
            </p>
            <p className="text-[16px] font-normal leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
        {/* Register */}
        <div>
          <Button className="w-[160px] h-[48px]">Register Now</Button>
        </div>
      </div>
      {/* second block */}
      <div className="h-[420px] flex justify-center py-[60px] px-[170px] items-center border border-t-gray-200">
        <div className="w-[1100px] h-[300px] bg-gray-300">
          <Image
            src="/meals_image.jpg"
            className="rounded-[10px]"
            width={1100}
            height={300}
            alt="Food Intake Trend"
          />
        </div>
      </div>
      {/* third block */}
      <div className="flex justify-center h-[444px] py-[60px] px-[170px] gap-[60px]">
        {/* <Image
          src="/food_intake_diagram.svg"
          width={520}
          height={324}
          alt="Food Intake vs. Activities Diagram"
        /> */}
        <Image
          src="/mood_image.png"
          width={520}
          height={324}
          alt="Mood Tracker Image"
        />
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[40px] font-bold leading-[48px]">
              Your Data Metrics
            </h1>
            <p>View how food intake correlates with other variablse</p>
            <Button className="w-[240px] h-[48px]">View All Metrics</Button>
          </div>

          {/* <ol className="flex w-[520px] h-[96px] justify-between">
            <li className="flex flex-col w-[160px] h-[96px] border border-gray-400 py-[16px] px-[16px] gap-[6px]">
              <p>Sleep</p>
              <p>6 hours</p>
            </li>
            <li className="flex flex-col w-[160px] h-[96px] border border-gray-400 py-[16px] px-[16px] gap-[6px]">
              <p>Sport</p>
              <p>2 hours</p>
            </li>
            <li className="flex flex-col w-[160px] h-[96px] border border-gray-400 py-[16px] px-[16px] gap-[6px]">
              <p>Hydration</p>
              <p>8 hours</p>
            </li>
          </ol> */}
        </div>
      </div>
      {/* fourth block */}
      <div className="h-[960px] py-[60px] px-[170px] gap-[100px] border border-t-gray-200">
        <div className="flex justify-center">
          <div className="flex h-[180px] w-[1100px] items-center justify-between">
            <div className="flex flex-col gap-[24px] h-[96px] justify-center">
              <h1 className="text-[40px] font-bold leading-[48px]">
                Log Your Data
              </h1>
              <p>Enter details about your daily food intake</p>
            </div>
            <Button className="w-[160px] h-[48px]">Complete the Form</Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-[560px] flex flex-col gap-[24px] w-[1100px]">
            <div className="flex flex-col items-end  gap-[24px]">
              <h1 className="text-[40px] font-bold leading-[48px]">
                Visualize Your Data
              </h1>
              <p>
                Interactive charts displaying the correlation between food
                intake and lifestyle factors
              </p>
            </div>

            <div className="flex gap-[40px]">
              {/* <Image
                src="/trend.svg"
                width={528.5}
                height={440}
                alt="Food Intake Trend"
              />
              <Image
                src="/distribution.svg"
                width={528.5}
                height={440}
                alt="Distribution"
              /> */}
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
      <div className="h-[770px] py-[60px] px-[170px] gap-[60px] flex flex-col items-center border border-t-gray-200">
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
          <div className="h-[300px] bg-gray-200 flex items-center justify-center">
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
