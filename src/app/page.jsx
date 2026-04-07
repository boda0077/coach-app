import Nav from "./components/nav";
import Image from "next/image";
import { Lexend, Inter } from "next/font/google";

import Button from "./components/button";

const lexFont = Lexend({ subsets: ["latin"] });
const intFont = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className=" h-screen bg-black/50 ">
        <Nav />
        <div className="absolute -z-10   top-0 left-0 w-full h-screen overflow-hidden">
          <Image
            src="/Images/Home/header-bg.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className=" grayscale-100 brightness-70"
          />
        </div>
        <div className="pl-18 pb-8 max-md:p-4 max-md:pl-4 w-full h-[84%]  flex flex-col justify-center max-w-360 mx-auto max-md:text-center   ">
          <span
            className={
              "uppercase w-fit text-surface-container-low bg-greenNeon text-sm tracking-widest py-0.5 px-4 mb-6 max-md:mx-auto   " +
              lexFont.className
            }
          >
            elite preformance coaching
          </span>
          <h1
            className={
              " text-[9rem] font-extrabold text-white tracking-[-10%] leading-30 max-md:text-[7rem] max-sm:text-[5rem] " +
              lexFont.className
            }
          >
            Mazen
            <br />
            <span
              className={
                "text-[9rem] font-extrabold text-main tracking-[-10%] max-md:text-[7rem] max-sm:text-[5rem] " +
                lexFont.className
              }
            >
              Ahmed
            </span>
          </h1>
          <p
            className={
              "text-gray-400 w-110 py-8  text-lg max-md:mx-auto max-sm:text-[1rem] max-sm:w-75      " +
              intFont.className
            }
          >
            Precision-engineered training protocols for high-performers. No
            gimmicks. Just relentless progress and measurable results.
          </p>
          <div className="flex max-md:grid gap-7">
            <Button
              href="/"
              text="Join the team"
              font={lexFont}
              className="py-6 px-10"
            />
            <Button
              href="/"
              text="Who am i"
              font={lexFont}
              className="py-6 px-14 bg-black! text-white  border-white border hover:bg-black/60! "
            />
          </div>
        </div>
      </header>

      <div className="w-full h-75 bg-surface border-t border-t-greenNeon flex justify-between items-center px-8  max-md:h-fit max-w-350 mx-auto ">

        <div className="grid leading-20">
          <h1 className="text-[8rem] font-extrabold text-main">10+</h1>
          <span className={"text-gray-400 uppercase text-[0.75rem] pl-2 " + lexFont.className}>Years Professional Experience</span>
        </div>
        <div className="grid leading-20">
          <h1 className="text-[8rem] font-extrabold text-main">500+</h1>
          <span className={"text-gray-400 uppercase text-[0.75rem] pl-2 " + lexFont.className}>Transformations Completed</span>
        </div>
        <div className="grid leading-20">
          <h1 className="text-[8rem] font-extrabold text-main">Elite</h1>
          <span className={"text-gray-400 uppercase text-[0.75rem] pl-2 " + lexFont.className}>NSCA & NASM Certifications
</span>
        </div>

       
      </div>

      <div className="bg-[rgb(19,19,19)] py-35 grid justfity-center max-w-350 mx-auto">

        <div className="flex justify-between items-end px-6">
          <h1 className={"text-[6rem] text-[#f5f5f5] font-extrabold tracking-[-9%] leading-20 " + lexFont.className }>The Kinetic Methodology</h1>
          <p className={"text-gray-400 w-100 text-right  " + intFont.className}>A multi-disciplinary approach to human performance optimization, focusing on physiological efficiency.</p>
        </div>

      
        <div className="w-[95%] h-110 mt-15 grid grid-cols-[1fr_400px] gap-4">

        <div className="relative w-full h-full overflow-hidden group">
  <Image 
    src="/Images/Home/card-one.png"
    alt="Background Image"
    layout="fill"
    objectFit="cover"
    className="absolute inset-0 w-full h-full object-cover grayscale-100 brightness-70 transition-transform duration-500 transform group-hover:scale-110"
  />

 
  <div className="relative z-10 flex flex-col items-start justify-end pl-6 h-full">
    <h1 className={`text-[4rem] font-extrabold text-main tracking-[-10%] ${lexFont.className}`}>
      Hypertrophy Systems
    </h1>
    <p className={`text-gray-400 w-150 text-left text-lg ${intFont.className}`}>
      Science-backed training blocks designed to maximize muscular adaptations through progressive overload and mechanical tension management.
    </p>
  </div>
</div>
          <div className="bg-greenNeon p-10 rounded-sm grid ">

            <img src="/icons/elc.svg" alt="elc icon" className="w-15 h-15" />
            <div className="flex flex-col justify-end items-start">
               <h3 className={`text-[2.5rem] font-semibold text-[rgb(19,19,19)]  leading-15 uppercase ` + intFont.className}>peak preformance</h3>
            <p className={`text-[rbg(19,19,19)]  `}>Engineered for those who demand more than 'average'. We optimize for power, speed, and endurance.</p>
            </div>

          </div>
           
           </div>

        <div className="w-[95%] h-110 mt-15 grid grid-cols-[400px_1fr] gap-4">

          <div className="bg-[#1B1B1B] p-10 rounded-sm grid grid-rows-[1fr_50px] justify-start text-[#f5f5f5] ">


            <div className="flex flex-col justify-start gap-15 items-start">
              <span className="uppercase py-1.5 px-3 border-3 border-greenNeon font-bold w-fit ">Module 03</span>
               <h3 className={`text-[2.5rem] font-bold   leading-10 uppercase ` + intFont.className}>Bio-Metric
Nutrition</h3>
            </div>

            <p className={`text-gray-400  `}>Fueling strategies mapped to your unique metabolic profile and training volume requirements.

</p>

          </div>

        <div className="relative w-full h-full overflow-hidden group">
  <Image 
    src="/Images/Home/card-two.png"
    alt="Background Image"
    layout="fill"
    objectFit="cover"
    className="absolute inset-0 w-full h-full object-cover grayscale-100 brightness-70 transition-transform duration-500 transform group-hover:scale-110"
  />

 
  <div className="relative z-10 flex flex-col items-start justify-end pl-6 h-full">
    <h1 className={`text-[4rem] font-extrabold text-main tracking-[-10%] ${lexFont.className}`}>
      Direct Coaching Access
    </h1>
    <p className={`text-gray-400 w-150 text-left text-lg ${intFont.className}`}>
      Weekly check-ins, form analysis, and real-time protocol adjustments via our dedicated athlete portal.
    </p>
  </div>
</div>
          
           
           </div>
       
      </div>
    </>
  );
}
