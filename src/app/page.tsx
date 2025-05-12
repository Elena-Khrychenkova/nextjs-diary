import { Button } from "@/components/ui/button";
import Diagram from "../../public/food_intake_diagram.svg";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* first block */}
      <div className="flex gap-10 items-center justify-center px-42.5 h-[364px] bg-blue-200">
        {/* Logo Image */}
        <div className="w-[100px] h-[100px] bg-amber-700 rounded-[50%]"></div>
        {/* Welcome Text */}
        <div className="flex flex-col h-[244px] w-[760px] bg-green-400 justify-center">
          <div className="flex flex-col ">
            <h1>Welcome to Food Diary!</h1>
            <p>Track your food intake and health metrics</p>
            <p>Join us and start your journey towards healthier lifestyle</p>
            <p>
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
      <div className="h-[420px] bg-green-300 flex justify-center py-[60px] px-[170px]">
        <div className="w-[1100px] h-[300px] bg-gray-300">Slider</div>
      </div>
      {/* third block */}
      <div className="flex justify-center h-[444px] py-[60px] px-[170px] gap-[60px]">
        <Image
          src="/food_intake_diagram.svg"
          width={520}
          height={324}
          alt="Food Intake vs. Activities Diagram"
        />
        <div className="flex flex-col bg-amber-600 gap-[60px]">
          <div className="flex flex-col bg-green-200 gap-[24px]">
            <h1>Your Data Metrics</h1>
            <p>View how food intake correlates with other variablse</p>
            <Button className="w-[240px] h-[48px]">View All Metrics</Button>
          </div>

          <ol className="flex w-[520px] h-[96px] bg-red-300 justify-between">
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
          </ol>
        </div>
      </div>
      {/* fourth block */}
      <div className="h-[960px] bg-amber-600 py-[60px] px-[170px] gap-[100px]">
        <div className="bg-yellow-300 flex h-[180px] items-center justify-between">
          <div className="bg-green-700 flex flex-col gap-[24px] h-[96px] justify-center">
            <h1>Log Your Data</h1>
            <p>Enter details about your daily food intake</p>
          </div>
          <Button className="w-[160px] h-[48px]">Complete the Form</Button>
        </div>
        <div className="bg-green-300 h-[560px] items-end flex flex-col gap-[24px]">
          <h1>Visualize Your Data</h1>
          <p>
            Interactive charts displaying the correlation between food intake
            and lifestyle factors
          </p>
          <div className="flex gap-[40px]">
            <Image
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
            />
          </div>
        </div>
      </div>
      {/* fifth block */}
      <div className="h-[770px] bg-blue-500 py-[60px] px-[170px] gap-[60px] flex flex-col items-center">
        <div className="bg-green-100 h-[168px] w-[1100px] gap-[24px] flex flex-col items-center">
          <h1>Insights</h1>
          <p>
            See how experts suggest balancing food with various lifestyle
            choices
          </p>
          <Button className="w-[160px] h-[48px]">View More</Button>
        </div>
        <div className="bg-green-400 h-[422px] w-[600px] border border-gray-400">
          <div className="bg-red-300 flex items-center h-[74px] p-[12px]">
            <p>Title</p>
          </div>
          <div className="h-[300px] bg-gray-400 flex items-center">
            <p>Healthy Meal</p>
          </div>
          <div className="bg-amber-300 h-[48px] p-[12px]">
            <p>Balanced meals for a healthier life</p>
          </div>
        </div>
      </div>
    </div>
  );
}
