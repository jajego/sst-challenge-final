import React from "react";
import Level from "./Level";

export default function Timeline({ levels }) {
  return (
    <div className="levels-wrapper flex flex-col-reverse justify-start content-center bg-white shadow-sm rounded-md px-16 py-7 pt-12 w-4/5 gap-5 max-h-[800px] overflow-auto">
      <div className="axis-wrapper flex justify-between w-full gap-0">
        <div className="font-bold axis-label ml-10">0</div>
        {/* <div className="font-bold axis-label text-red-400">10,800</div>
        <div className="font-bold axis-label text-red-400">21,600</div>
        <div className="font-bold axis-label text-red-400">32,400</div>
        <div className="font-bold axis-label text-red-400">43,200</div>
        <div className="font-bold axis-label text-red-400">54,000</div>
        <div className="font-bold axis-label text-red-400">64,800</div>
        <div className="font-bold axis-label text-red-400">75,600</div> */}
        <div className="font-bold axis-label -mr-6">86400</div>
      </div>
      {levels[0].events.length > 0 &&
        levels.map((level, i) => (
          <Level level={level.level} events={levels[i].events} />
        ))}
    </div>
  );
}
