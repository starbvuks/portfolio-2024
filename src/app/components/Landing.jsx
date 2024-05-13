import React from "react";

const data = {
  whatIDo: {
    title: ["What", "I", "Do"],
    items: [
      { name: "FRONT END DEV", number: "1" },
      { name: "BACK END DEV", number: "2" },
      { name: "APPLICATION DEV", number: "3" },
      { name: "UI / UX DESIGN", number: "4" },
      { name: "BRAND DESIGN", number: "5" },
    ],
  },
  techStack: {
    title: ["Tech", "Stack"],
    items: [
      { name: "HTML/ CSS/ JS", number: "1" },
      { name: "REACT JS", number: "2" },
      { name: "REACT NATIVE", number: "3" },
      { name: "NEXT JS", number: "4" },
      { name: "REDUX", number: "5" },
      { name: "FIREBASE", number: "6" },
      { name: "MONGODB", number: "7" },
      { name: "POSTGRESQL", number: "8" },
      { name: "EXPRESS JS", number: "9" },
      { name: "STRAPI CMS", number: "10" },
    ],
  },
  experience: {
    title: ["Experience"],
    items: [
      {
        name: "ALEPH INNOVATION",
        role: "Founder, Lead Developer",
        year: "2024",
        url: "https://alephinnov.com",
        number: "1",
      },
      {
        name: "TALENTMAPP",
        role: "Co Founder, Lead Developer",
        year: "2024",
        url: "https://talentmapp.co",
        number: "2",
      },
      {
        name: "STARTUP GRIND HYDERABAD",
        role: "Chapter Director",
        year: "2024",
        url: "https://www.startupgrind.com/hyderabad/",
        number: "3",
      },
      {
        name: "SoAD ARCHIVAL PLATFORM",
        role: "Lead Developer",
        year: "2023",
        url: "https://portfolio.soad.co.in/",
        number: "4",
      },
      {
        name: "HUNTSJOB",
        role: "Front-End Developer",
        year: "2023",
        url: "https://play.google.com/store/apps/details?id=com.googlesignexbee",
        number: "5",
      },
      {
        name: "LANDMARK LOCATOR",
        role: "Bootcamp Capstone Project - Full-Stack Developer",
        year: "2021",
        url: "https://landmark-locator.vercel.app/",
        number: "6",
      },
      {
        name: "MMDB v2",
        role: "Another Bootcamp Capstone Project - Full-Stack Developer",
        year: "2021",
        url: "https://mmdbv2.vercel.app/",
        number: "7",
      },
    ],
  },
  education: {
    title: ["Education"],
    items: [
      {
        name: "WOXSEN UNIVERSITY",
        degree: "B.tech",
        year: "2021 - 2025",
        url: "https://woxsen.edu.in/academics/programs/b-tech/",
        number: "1",
      },
      {
        name: "SCHOOL OF ACCELERATED LEARNING",
        degree: "Product Engineering Bootcamp",
        year: "2021",
        url: "https://www.soal.io/",
        number: "2",
      },
      {
        name: "HARVARD'S CS50x",
        degree: "Computer Science Course",
        year: "2020 - 2021",
        url: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
        number: "3",
      },
    ],
  },
  socials: {
    title: ["Socials"],
    items: [
      {
        name: "LINKEDIN",
        url: "https://www.linkedin.com/in/sarvag-kalari/",
        number: "1",
      },
      { name: "GITHUB", url: "https://github.com/starbvuks", number: "2" },
      {
        name: "STACK OVERFLOW",
        url: "https://stackoverflow.com/users/13939799/starbvuks",
        number: "3",
      },
    ],
  },
};

const Landing = () => {
  return (
    <div className="text-[#DBDBDB] flex flex-col">
      <div className="flex items-end p-4 md:p-8 border-b-2 border-[#242424]">
        <span className="font-gambarino text-4xl md:text-7xl text-[#DBDBDB] hover:text-[#8BCD00] cursor-cell tracking-tight">
          Sarvag Kalari
        </span>
        <span className="flex items-center font-gambarino font-light text-sm md:text-lg text-[#323232] tracking-tight">
          <span className="text-xl md:text-2xl tracking-tighter">
            &emsp; // &emsp;
          </span>
          PORTFOLIO 2024
        </span>
      </div>

      {/* WHAT I DO */}
      <div className="flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 border-[#242424]">
        {/* Title */}
        <div className="flex justify-between text-[#323232] text-2xl md:text-4xl">
          <span className="font-gambarino">What</span>
          <span className="font-gambarino">I</span>
          <span className="font-gambarino">Do</span>
        </div>
        {/* Items */}
        <div className="flex justify-between font-esenka text-sm md:text-3xl text-[#ECECEC]">
          <div className="flex flex-col gap-1 md:gap-4 font-black pl-4 md:pl-8 py-4 md:py-8 w-full">
            {data.whatIDo.items.map((item, index) => (
              <div key={index} className="flex justify-between w-full">
                <a>{item.name}</a>
                <span
                  className="font-esenka font-normal text-xs md:text-xl"
                  style={index === 0 ? { paddingRight: "3px" } : {}}
                >
                  {item.number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TECH STACK */}
      <div className="flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 border-[#242424]">
        {/* Title */}
        <div className="flex justify-between text-[#323232] text-2xl md:text-4xl">
          <span className="font-gambarino">Tech</span>
          <span className="font-gambarino">Stack</span>
        </div>
        {/* Items */}
        <div className="flex justify-between font-esenka text-sm md:text-3xl text-[#ECECEC]">
          <div className="flex flex-col gap-1 md:gap-4 font-black pl-4 md:pl-8 py-4 md:py-8 w-full">
            {data.techStack.items.map((item, index) => (
              <div key={index} className="flex justify-between w-full">
                <a>{item.name}</a>
                <span
                  className="font-esenka font-normal text-xs md:text-xl"
                  style={index === 0 ? { paddingRight: "3px" } : {}}
                >
                  {item.number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 border-[#242424]">
        {/* Title */}
        <div className="flex justify-between text-[#323232] text-2xl md:text-4xl">
          <span className="font-gambarino">Experience</span>
        </div>
        {/* Items */}
        <div className="flex justify-between font-esenka text-sm md:text-3xl text-[#ECECEC]">
          <div className="flex flex-col gap-2 md:gap-4 font-black pl-4 md:pl-8 py-4 md:py-8 w-full">
            {data.experience.items.map((item, index) => (
              <div key={index} className="flex justify-between w-full">
                <div className="flex gap-2 md:gap-4 items-end">
                  <a
                    href={item.url}
                    className="border-b-[1px] hover:text-[#8BCD00] hover:border-[#8BCD00] cursor-pointer transition"
                  >
                    {item.name}
                  </a>
                  <span className="font-esenka font-light text-xs md:text-base text-[#323232]">
                    {item.role}, &nbsp; {item.year}
                  </span>
                </div>
                <span
                  className="font-esenka font-normal text-xs md:text-xl"
                  style={index === 0 ? { paddingRight: "3px" } : {}}
                >
                  {item.number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 border-[#242424]">
        {/* Title */}
        <div className="flex justify-between text-[#323232] text-2xl md:text-4xl">
          <span className="font-gambarino">Education</span>
        </div>
        {/* Items */}
        <div className="flex justify-between font-esenka text-sm md:text-3xl text-[#ECECEC]">
          <div className="flex flex-col gap-1 md:gap-4 font-black pl-4 md:pl-8 py-4 md:py-8 w-full">
            {data.education.items.map((item, index) => (
              <div key={index} className="flex justify-between w-full">
                <div className="flex gap-2 md:gap-4 items-end">
                  <a
                    href={item.url}
                    className="hover:text-[#8BCD00] cursor-pointer transition"
                  >
                    {item.name}
                  </a>
                  <span className="font-esenka font-light text-xs md:text-base text-[#323232]">
                    {item.degree}, &nbsp; {item.year}
                  </span>
                </div>
                <span
                  className="font-esenka font-normal text-xs md:text-xl"
                  style={index === 0 ? { paddingRight: "3px" } : {}}
                >
                  {item.number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SOCIALS */}
      <div className="flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 border-[#242424]">
        {/* Title */}
        <div className="flex justify-between text-[#323232] text-2xl md:text-4xl">
          <span className="font-gambarino">Socials</span>
        </div>
        {/* Items */}
        <div className="flex justify-between font-esenka text-sm md:text-3xl text-[#ECECEC]">
          <div className="flex flex-col gap-1 md:gap-4 font-black pl-4 md:pl-8 py-4 md:py-8 w-full">
            {data.socials.items.map((item, index) => (
              <div key={index} className="flex justify-between w-full">
                <a
                  href={item.url}
                  className="hover:text-[#8BCD00] cursor-pointer transition"
                >
                  {item.name}
                </a>
                <span
                  className="font-esenka font-normal text-xs md:text-xl"
                  style={index === 0 ? { paddingRight: "3px" } : {}}
                >
                  {item.number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CONTACT */}
      <div className="flex flex-col px-4 md:px-8 py-4 md:py-6">
        {/* Title */}
        <div className="flex justify-between text-[#323232] text-2xl md:text-4xl">
          <span className="font-gambarino">Contact</span>
          <span className="font-gambarino">Me</span>
        </div>
        {/* Items */}
        <div className="flex flex-col mt-8 md:mt-14 justify-between font-apercu text-sm md:text-xl text-[#515151] tracking-tight">
          <a>sarvagk@gmail.com</a>
          <a>+91 95335 86416</a>
        </div>
      </div>
    </div>
  );
};
export default Landing;
