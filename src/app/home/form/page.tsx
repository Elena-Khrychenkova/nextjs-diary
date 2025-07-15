import { auth } from "@/app/auth";
import FoodIntakeForm from "@/components/food-intake-form";
import Image from "next/image";

export default async function FormPage() {
  const session = await auth();
  return (
    <div className="relative overflow-hidden">
      {/*Coral Circle - Top Left */}
      <div className="hidden md:block absolute top-[-60px] left-[80px] z-0 animate-spin-slow">
        <svg
          viewBox="0 0 100 100"
          className="w-40 h-40 text-[#E06159] opacity-10"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
      </div>
      {/*Spiral Ring - Floating Left */}
      <div className="hidden md:block absolute top-[1%] left-[-80px] z-0 animate-float">
        <svg
          viewBox="0 0 100 100"
          className="w-60 h-60 opacity-10"
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
      {/* Spiral Ring - Spinning Right */}
      <div className="hidden md:block absolute top-[20%] right-[-60px] z-0 animate-spin-slow">
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
      {/* Hexagon - Rigth */}
      <div className="hidden md:block absolute top-[-100px] right-[-30px] z-0 animate-spin-slow">
        <svg
          viewBox="0 0 100 100"
          className="w-50 h-50 text-[#E06159] opacity-10"
          fill="currentColor"
        >
          <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
        </svg>
      </div>
      {/* Diamond - Bottom Left */}
      <div className="hidden md:block absolute bottom-[-60px] left-[-80px] z-0 animate-float">
        <svg
          viewBox="0 0 100 100"
          className="w-64 h-64 text-[#E06159] opacity-10 rotate-45"
          fill="currentColor"
        >
          <rect x="25" y="25" width="50" height="50" />
        </svg>
      </div>
      {/* Triangle - Spinning Right */}
      <div className="hidden md:block absolute bottom-[-60px] right-[-40px] z-0 animate-spin-slow">
        <svg
          viewBox="0 0 100 100"
          className="w-40 h-40 text-[#5025C5] opacity-10"
          fill="currentColor"
        >
          <polygon points="50,0 100,100 0,100" />
        </svg>
      </div>
      <div className="flex flex-col pb-[120px] items-center justify-center gap-12">
        <div className="flex gap-20">
          <div className="flex items-center">
            <h1 className="text-[40px] font-bold leading-[48px]">Data Log</h1>
          </div>

          <div className="flex flex-col w-[520px]">
            <div className="flex justify-center ">
              <Image
                src="/pixeltrue-seo-1.svg"
                width={520}
                height={400}
                alt="Seo"
              />
            </div>
            <p className="flex justify-end text-xs text-gray-500 italic">
              Illustration by&nbsp;
              <a
                href="https://icons8.com/illustrations/author/ARh4OKrFtdfC"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#5025C5] hover:text-[#e06159]"
              >
                Pixeltrue Ouch!
              </a>
            </p>
          </div>
        </div>
        <FoodIntakeForm initialState={{ message: "" }} session={session} />
      </div>
    </div>
  );
}
