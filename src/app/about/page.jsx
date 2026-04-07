import Nav from "@/app/components/nav";
import { Lexend, Inter } from "next/font/google";
import Image from "next/image";
import WorkCard from "../components/workCard";

const lexFont = Lexend({ subsets: ["latin"] });
const intFont = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-[1fr_500px] max-lg:flex max-lg:flex-col-reverse items-center  max-w-350 2xl:mx-auto mt-12 2xl:gap-40 max-sm:w-fit  ">
        <div className="pl-12  pb-8 max-md:p-4 max-md:pl-4 w-full h-[84%] max-lg:text-center max-lg:items-center  flex flex-col justify-center max-w-350  max-md:text-center   ">
          <span
            className={
              "uppercase w-fit text-surface-container-low text-main text-sm tracking-widest py-0.5 px-4 mb-6 max-md:mx-auto   " +
              lexFont.className
            }
          >
            Master Coach & Trainer
          </span>
          <h1
            className={
              " text-[9rem] font-extrabold text-white tracking-[-10%] leading-30 max-md:text-[7rem] max-sm:text-[4rem] " +
              lexFont.className
            }
          >
            Mazen
            <br />
            <span
              className={
                "text-[9rem] font-extrabold text-greenNeon tracking-[-10%] max-md:text-[7rem] max-sm:text-[4rem] " +
                lexFont.className
              }
            >
              Ahmed
            </span>
          </h1>
          <p
            className={
              "text-gray-400 w-110 py-8  text-lg max-md:mx-auto max-sm:text-[0.85rem] max-sm:w-70       " +
              intFont.className
            }
          >
            I don't believe in "fitness journeys." I believe in technical
            execution. My philosophy is built on the friction between discipline
            and results, utilizing data-driven biomechanics to push the human
            body past its perceived limits.
          </p>
        </div>

        <div className="relative w-fit overflow-hidden  ">
          <Image
            src="/Images/About/profile.png"
            alt="Background Image"
            objectFit="cover"
            width={450}
            height={450}
            loading="lazy"
            className=" -z-1 max-md:w-70 grayscale-100 brightness-70 max-w-350 mx-auto hover:grayscale-0 transition-all hover:scale-105 duration-300 "
          />
          <div className="w-30 h-30 border-t-2 border-l-2 border-main absolute -top-10 -left-2"></div>
          <div className=" z-1 w-[90%] text-lg  float-right py-4 px-10 bg-surface/60 backdrop:blur-[20px] relative bottom-20 max-md:text-center max-sm:px-0 max-md:float-none  ">
            <span
              className={
                "text-[#f5f5f5] font-black   text-4xl max-sm:text-3xl   " + lexFont.className
              }
            >
              "DISCIPLINE IS A SCIENCE."
            </span>
          </div>
        </div>
      </div>
      <div className="grid   px-10 py-10 bg-[rgb(19,19,19)]  ">
        <h1 className={"text-[5rem] text-[#f5f5f5] font-black max-md:text-[3rem]  " + lexFont.className}>
          Work History <span className="text-main font-bold text-sm">+5 Years</span>
        </h1>
        <div className="grid grid-cols-3 max-lg:grid-cols-2  max-md:grid-cols-1 gap-4 mx-auto mt-10">
          <WorkCard
            date="2025-present"
            about="Head of Athletic Performance for elite competitors. Specializing in neural drive and power phase transitions."
            place="
LONDON, UK"
            club="THE VANGUARD CLUB
            
"

          />
          <WorkCard
            date="2023-2024"
            about="Master Nutritionist & Technical Coach. Developed the 'Kinetic Fuel' methodology still used today."
            place="
BERLIN, DE
"
            club="ONYX PERFORMANCE"
          />
          <WorkCard
            date="2022-2023"
            about="Lead S&C Coach. Managed 40+ professional athletes across Olympic weightlifting and high-intensity disciplines."
            place="NEW YORK, USA"
            club="TITAN ATHLETICS"
          />
        </div>
      </div>
    </>
  );
}
