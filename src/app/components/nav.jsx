"use client";
import Image from "next/image";
import { Lexend } from "next/font/google";
import Button from "./button";
import { useState } from "react";

const lexFont = Lexend({ subsets: ["latin"] });

export default function Nav() {
  const [open, setOpen] = useState(false);

  const handelClick = () => {
    setOpen(!open);
  };

  return (
    <nav className=" sticky top-0 py-8 px-8 flex justify-between items-center bg-[#131313]/60   backdrop:blur-[20px] ">
      <span
        className={
          lexFont.className +
          " tracking-[-10%] text-3xl uppercase text-main font-extrabold"
        }
      >
        Mazen
      </span>
      <div
        className={`${open ? "grid" : "hidden"} absolute top-60 left-1/2 -translate-x-1/2 -translate-y-1/2 
bg-black/90 p-6 rounded-xl place-items-center w-100 h-80`}
      >
        <ul
          className={
            "flex flex-col items-center gap-12 tracking-[-4%] font-medium " +
            lexFont.className
          }
        >
          <li>
            <a
              className="text-[#f5f5f5] uppercase hover:text-greenNeon"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-[#f5f5f5] uppercase hover:text-greenNeon"
              href="/about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-[#f5f5f5] uppercase hover:text-greenNeon"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>

        <Button text="Get Started" font={lexFont} />
      </div>
      <ul
        className={
          " relative flex justify-between items-center gap-14 tracking-[-4%] font-medium max-md:hidden " +
          lexFont.className
        }
      >
        <li>
          <a
            className="text-[#f5f5f5] uppercase hover:text-greenNeon "
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-[#f5f5f5] uppercase hover:text-greenNeon "
            href="/about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-[#f5f5f5] uppercase hover:text-greenNeon "
            href="/contact"
          >
            Contact
          </a>
        </li>
      </ul>
      <Button text="Get Started" font={lexFont} className="max-md:hidden" />

      <Image
        src={!open ? "/icons/menu-bars.svg" : "/icons/menu-x.svg"}
        alt="Background Image"
        width={45}
        height={45}
        className=" bg-greenNeon rounded-sm hidden max-md:block cursor-pointer transition-all  "
        onClick={handelClick}
      />
    </nav>
  );
}
