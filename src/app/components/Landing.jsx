import React from "react";

const Landing = () => {
  return (
    <div className="text-[#DBDBDB] flex flex-col">
      <div className="flex items-end p-8 border-b-2 border-[#242424]">
        <span
          className="font-gambarino text-7xl text-[#DBDBDB] hover:text-[#8BCD00] cursor-cell
         tracking-tight"
        >
          Sarvag Kalari
        </span>
        <span className="flex items-center font-gambarino font-light text-lg text-[#323232] tracking-tight">
          <span className="text-2xl tracking-tighter">&emsp; // &emsp;</span>
          PORTFOLIO 2024
        </span>
      </div>
      {/* WHAT I DO */}
      <div className="flex flex-col px-8 py-6 border-b-2 border-[#242424]">
        <div className="flex justify-between text-[#323232] text-4xl">
          <span className="font-gambarino">What</span>
          <span className="font-gambarino">I</span>
          <span className="font-gambarino">Do</span>
        </div>
        <div className="flex justify-between font-esenka text-3xl text-[#ECECEC]">
          <div className="flex flex-col gap-4 font-black pl-8 py-8 w-full">
            {/* Front-end Dev */}
            <div className="flex justify-between w-full">
              <a>FRONT END DEV</a>
              <span className="font-esenka font-normal text-xl px-1">1</span>
            </div>
            {/* Back-end Dev */}
            <div className="flex justify-between w-full">
              <a>BACK END DEV</a>
              <span className="font-esenka font-normal text-xl">2</span>
            </div>
            {/* Application Dev */}
            <div className="flex justify-between w-full">
              <a>APPLICATION DEV</a>
              <span className="font-esenka font-normal text-xl">3</span>
            </div>
            {/* ui/ux Design */}
            <div className="flex justify-between w-full">
              <a>UI / UX DESIGN</a>
              <span className="font-esenka font-normal text-xl">4</span>
            </div>
            {/* brand Design */}
            <div className="flex justify-between w-full">
              <a>BRAND DESIGN</a>
              <span className="font-esenka font-normal text-xl">5</span>
            </div>
          </div>
        </div>
      </div>
      {/* WHAT I DO */}
      <div className="flex flex-col px-8 py-6 border-b-2 border-[#242424]">
        <div className="flex justify-between text-[#323232] text-4xl">
          <span className="font-gambarino">Tech</span>
          <span className="font-gambarino">Stack</span>
        </div>
        <div className="flex justify-between font-esenka text-3xl text-[#ECECEC]">
          <div className="flex flex-col gap-4 font-black pl-8 py-8 w-full">
            {/* HTML/ CSS/ JS */}
            <div className="flex justify-between w-full">
              <a>HTML/ CSS/ JS</a>
              <span className="font-esenka font-normal text-xl px-1">1</span>
            </div>
            {/* react JS */}
            <div className="flex justify-between w-full">
              <a>REACT JS</a>
              <span className="font-esenka font-normal text-xl px-1">2</span>
            </div>
            {/* react JS */}
            <div className="flex justify-between w-full">
              <a>REACT NATIVE</a>
              <span className="font-esenka font-normal text-xl px-1">3</span>
            </div>
            {/* react JS */}
            <div className="flex justify-between w-full">
              <a>NEXT JS</a>
              <span className="font-esenka font-normal text-xl px-1">4</span>
            </div>
            {/* react JS */}
            <div className="flex justify-between w-full">
              <a>REDUX</a>
              <span className="font-esenka font-normal text-xl px-1">5</span>
            </div>
            {/* react JS */}
            <div className="flex justify-between w-full">
              <a>FIREBASE</a>
              <span className="font-esenka font-normal text-xl px-1">6</span>
            </div>
            {/* FIREBASE */}
            <div className="flex justify-between w-full">
              <a>FIREBASE</a>
              <span className="font-esenka font-normal text-xl px-1">7</span>
            </div>
            {/* mongo */}
            <div className="flex justify-between w-full">
              <a>MONGODB</a>
              <span className="font-esenka font-normal text-xl px-1">8</span>
            </div>
            {/* posgres */}
            <div className="flex justify-between w-full">
              <a>POSTGRESQL</a>
              <span className="font-esenka font-normal text-xl px-1">9</span>
            </div>
            {/* express */}
            <div className="flex justify-between w-full">
              <a>EXPRESS JS</a>
              <span className="font-esenka font-normal text-xl px-1">10</span>
            </div>
            {/* express */}
            <div className="flex justify-between w-full">
              <a>STRAPI CMS</a>
              <span className="font-esenka font-normal text-xl px-1">11</span>
            </div>
          </div>
        </div>
      </div>
      {/* EXPERIENCE */}
      <div className="flex flex-col px-8 py-6 border-b-2 border-[#242424]">
        <div className="flex justify-between text-[#323232] text-4xl">
          <span className="font-gambarino">Experience</span>
        </div>
        <div className="flex justify-between font-esenka text-3xl text-[#ECECEC]">
          <div className="flex flex-col gap-4 font-black pl-8 py-8 w-full">
            {/* ALEPH */}
            <div className="flex justify-between w-full">
              <div className="flex gap-4 items-end">
                <a
                  href="https://alephinnov.com"
                  className="border-b-[1px] hover:text-[#8BCD00] hover:border-[#8BCD00] transition"
                >
                  ALEPH INNOVATION
                </a>
                <span className="font-esenka font-light text-base text-[#323232]">
                  Founder, Lead Developer, &nbsp; 2024
                </span>
              </div>
              <span className="font-esenka font-normal text-xl px-1">1</span>
            </div>
            {/* TALENTMAPP */}
            <div className="flex justify-between w-full">
              <div className="flex gap-4 items-end">
                <a
                  href="https://talentmapp.co"
                  className="border-b-[0.5px] hover:text-[#8BCD00] hover:border-[#8BCD00] transition"
                >
                  TALENTMAPP
                </a>
                <span className="font-esenka font-light text-base text-[#323232]">
                  Co Founder, Lead Developer, &nbsp; 2024
                </span>
              </div>
              <span className="font-esenka font-normal text-xl">2</span>
            </div>
            {/* STARTUP GRIND */}
            <div className="flex justify-between w-full">
              <div className="flex gap-4 items-end">
                <a
                  href="https://www.startupgrind.com/hyderabad/"
                  className="border-b-[0.5px] hover:text-[#8BCD00] hover:border-[#8BCD00] transition"
                >
                  STARTUP GRIND HYDERABAD
                </a>
                <span className="font-esenka font-light text-base text-[#323232]">
                  Chapter Director, &nbsp; 2024
                </span>
              </div>
              <span className="font-esenka font-normal text-xl">3</span>
            </div>
            {/* SOAD PLATFORM */}
            <div className="flex justify-between w-full">
              <div className="flex gap-4 items-end">
                <a
                  href="https://https://portfolio.soad.co.in/"
                  className="border-b-[0.5px] hover:text-[#8BCD00] hover:border-[#8BCD00] transition"
                >
                  SoAD ARCHIVAL PLATFORM
                </a>
                <span className="font-esenka font-light text-base text-[#323232]">
                  Lead Developer, &nbsp; 2023
                </span>
              </div>
              <span className="font-esenka font-normal text-xl">4</span>
            </div>
            {/* HUNTSJOB */}
            <div className="flex justify-between w-full">
              <div className="flex gap-4 items-end">
                <a
                  href="https://play.google.com/store/apps/details?id=com.googlesignexbee"
                  className="border-b-[0.5px] hover:text-[#8BCD00] hover:border-[#8BCD00] transition"
                >
                  HUNTSJOB
                </a>
                <span className="font-esenka font-light text-base text-[#323232]">
                  Front-End Developer, &nbsp; 2023
                </span>
              </div>
              <span className="font-esenka font-normal text-xl">5</span>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex gap-4 items-end">
                <a
                  href="https://landmark-locator.vercel.app/"
                  className="border-b-[0.5px] hover:text-[#8BCD00] hover:border-[#8BCD00] transition"
                >
                  LANDMARK LOCATOR
                </a>
                <span className="font-esenka font-light text-base text-[#323232]">
                  Bootcamp Capstone Project - Full-Stack Developer, &nbsp; 2021
                </span>
              </div>
              <span className="font-esenka font-normal text-xl">6</span>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex gap-4 items-end">
                <a
                  href="https://mmdbv2.vercel.app/"
                  className="border-b-[0.5px] hover:text-[#8BCD00] hover:border-[#8BCD00] transition"
                >
                  MMDB v2
                </a>
                <span className="font-esenka font-light text-base text-[#323232]">
                  Another Bootcamp Capstone Project - Full-Stack Developer,
                  &nbsp; 2021
                </span>
              </div>
              <span className="font-esenka font-normal text-xl">7</span>
            </div>
          </div>
        </div>
      </div>
      {/* EDUCATION */}
      <div className="flex flex-col px-8 py-6 border-b-2 border-[#242424]">
        <div className="flex justify-between text-[#323232] text-4xl">
          <span className="font-gambarino">Experience</span>
        </div>
        <div className="flex justify-between font-esenka text-3xl text-[#ECECEC]">
          <div className="flex flex-col gap-4 font-black pl-8 py-8 w-full">
            {/* WOXSEN */}
            <div className="flex justify-between w-full">
              <div className="flex gap-4 items-end">
                <a
                  href="https://woxsen.edu.in/academics/programs/b-tech/"
                  className=" hover:text-[#8BCD00] transition"
                >
                  WOXSEN UNIVERSITY
                </a>
                <span className="font-esenka font-light text-base text-[#323232]">
                  B.tech, &nbsp; 2021 - 2025
                </span>
              </div>
              <span className="font-esenka font-normal text-xl px-1">1</span>
            </div>
            {/* SOAL */}
            <div className="flex justify-between w-full">
              <div className="flex gap-4 items-end">
                <a
                  href="https://www.soal.io/"
                  className=" hover:text-[#8BCD00] transition"
                >
                  SCHOOL OF ACCELERATED LEARNING (SOAL)
                </a>
                <span className="font-esenka font-light text-base text-[#323232]">
                  Product Engineering Bootcamp, &nbsp; 2021
                </span>
              </div>
              <span className="font-esenka font-normal text-xl">2</span>
            </div>
            {/* CS50 */}
            <div className="flex justify-between w-full">
              <div className="flex gap-4 items-end">
                <a
                  href="https://pll.harvard.edu/course/cs50-introduction-computer-science"
                  className=" hover:text-[#8BCD00] transition"
                >
                  HARVARD&apos;S CS50x
                </a>
                <span className="font-esenka font-light text-base text-[#323232]">
                  Computer Science Course, &nbsp; 2020 - 2021
                </span>
              </div>
              <span className="font-esenka font-normal text-xl">3</span>
            </div>
          </div>
        </div>
      </div>
      {/* SOCIALS */}
      <div className="flex flex-col px-8 py-6 border-b-2 border-[#242424]">
        <div className="flex justify-between text-[#323232] text-4xl">
          <span className="font-gambarino">Socials</span>
        </div>
        <div className="flex justify-between font-esenka text-3xl text-[#ECECEC]">
          <div className="flex flex-col gap-4 font-black pl-8 py-8 w-full">
            {/* Linkedin */}
            <div className="flex justify-between w-full">
              <a
                href="https://www.linkedin.com/in/sarvag-kalari/"
                className=" hover:text-[#8BCD00] transition"
              >
                LINKEDIN
              </a>
              <span className="font-esenka font-normal text-xl px-1">1</span>
            </div>
            {/* Github */}
            <div className="flex justify-between w-full">
              <a
                href="https://github.com/starbvuks"
                className=" hover:text-[#8BCD00] transition"
              >
                GITHUB
              </a>
              <span className="font-esenka font-normal text-xl">2</span>
            </div>
            {/* Stack Overflow */}
            <div className="flex justify-between w-full">
              <a
                href="https://stackoverflow.com/users/13939799/starbvuks"
                className=" hover:text-[#8BCD00] transition"
              >
                STACK OVERFLOW
              </a>
              <span className="font-esenka font-normal text-xl">3</span>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT */}
      <div className="flex flex-col px-8 py-6">
        <div className="flex justify-between text-[#323232] text-4xl">
          <span className="font-gambarino">Contact</span>
          <span className="font-gambarino">Me</span>
        </div>
        <div className="flex flex-col mt-14 justify-between font-apercu text-xl text-[#515151] tracking-tight">
            <a>sarvagk@gmail.com</a>
            <a>+91 95335 86416</a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
