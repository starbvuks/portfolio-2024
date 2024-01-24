/* eslint-disable @next/next/no-img-element */
import React from "react";

const Landing = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="py-5 flex flex-row items-center justify-between relative overflow-hidden mt-3 text-black">
        {/* <span className="text-black font-Faction font-extrabold text-7xl tracking-normal whitespace-nowrap">
          SARVAG KALARI
        </span> */}
        {/* <div className="h-12 border-[#FF8126] border-4 w-[70%] rounded-full" /> */}

        <div class="marquee flex whitespace-nowrap animate-marquee">
          <div class="marquee-content font-Faction font-extrabold text-7xl tracking-normal">
            SARVAG KALARI&ensp;SARVAG KALARI&ensp;SARVAG KALARI&ensp;
          </div>
          <div class="marquee-content font-Faction font-extrabold text-7xl tracking-normal">
            SARVAG KALARI&ensp;SARVAG KALARI&ensp;SARVAG KALARI&ensp;
          </div>
        </div>
        <div class="marquee2 flex whitespace-nowrap animate-marquee">
          <div class="marquee-content font-Faction font-extrabold text-7xl tracking-normal">
            SARVAG KALARI&ensp;SARVAG KALARI&ensp;SARVAG KALARI&ensp;
          </div>
          <div class="marquee-content font-Faction font-extrabold text-7xl tracking-normal">
            SARVAG KALARI&ensp;SARVAG KALARI&ensp;SARVAG KALARI&ensp;
          </div>
        </div>
      </div>
      {/* <img src="/assets/sqiggle.png" className="m-auto w-[100%] " /> */}

      {/*slider */}
      {/* <div class="px-24 py-5 flex flex-row items-center justify-between bg-grainy-bg bg-left-bottom relative overflow-hidden">
        <div class="marquee flex whitespace-nowrap animate-marquee">
          <div class="marquee-content font-Faction font-extrabold text-7xl tracking-normal">
            SARVAG KALARI&ensp;SARVAG KALARI&ensp;SARVAG KALARI&ensp;
          </div>
          <div class="marquee-content font-Faction font-extrabold text-7xl tracking-normal">
            SARVAG KALARI&ensp;SARVAG KALARI&ensp;SARVAG KALARI&ensp;
          </div>
        </div>
        <div class="marquee2 flex whitespace-nowrap animate-marquee">
          <div class="marquee-content font-Faction font-extrabold text-7xl tracking-normal">
            SARVAG KALARI&ensp;SARVAG KALARI&ensp;SARVAG KALARI&ensp;
          </div>
          <div class="marquee-content font-Faction font-extrabold text-7xl tracking-normal">
            SARVAG KALARI&ensp;SARVAG KALARI&ensp;SARVAG KALARI&ensp;
          </div>
        </div>
      </div> */}

      <div className="mt-2 px-24 ">
        <div className="flex gap-10 items-center">
          <span className="text-black font-Manrope font-extrabold text-6xl tracking-tighter animate-fade-in-push-up">
            freelance dev
          </span>
          <img src="/assets/star.png" className="w-24" />
          <span className="text-black font-Manrope font-extrabold text-6xl tracking-tighter animate-fade-in-push-up animate-delay-2000ms">
            self taught designer
          </span>
        </div>
        <div className="flex gap-20 items-center mt-6">
          <span className="text-black font-Manrope font-extrabold text-6xl tracking-tighter">
            entreprenur
          </span>
          <span className="text-black font-Manrope font-extrabold text-6xl tracking-tighter">
            undergrad student
          </span>
        </div>
      </div>
      <div className="px-24 pb-16 flex items-center align-middle">
        <img
          src="/assets/grid.png"
          className="m-auto w-[100%] py-16 relative"
        />
        <img
          src="/assets/huntsjob.png"
          className="absolute xl:-bottom-3 2xl:bottom-16 lg:left-[32%] xl:h-1/2 2xl:h-3/5"
        />
        <img
          src="/assets/ll.png"
          className="absolute xl:bottom-20 2xl:bottom-16 lg:left-[55%] xl:h-1/3 2xl:h-3/5"
        />
        <img
          src="/assets/mmdb.png"
          className="absolute xl:bottom-3 2xl:bottom-16 lg:left-[59%] xl:h-[35%] 2xl:h-3/5"
        />
      </div>
    </div>
  );
};

export default Landing;
