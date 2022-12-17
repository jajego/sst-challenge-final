import React from "react";
import Level from "./Level";

export default function Timeline({ levels }) {
  return (
    <div className="levels-wrapper flex flex-col-reverse justify-start content-center bg-white shadow-sm rounded-md px-16 py-7 pt-12 w-4/5 gap-5">
      <div className="axis-wrapper flex justify-between w-full gap-0">
        <div className="font-bold axis-label ml-10">0</div>
        <div className="font-bold axis-label -mr-6">86400</div>
      </div>
      {levels[0].events.length > 0 &&
        levels.map((level, i) => (
          <Level
            key={`level${i}`}
            level={level.level}
            events={levels[i].events}
          />
        ))}
    </div>
  );
}
