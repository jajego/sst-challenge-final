import React from "react";
import Event from "./Event";
import { randomColor } from "randomcolor";

export default function Level({ level, events }) {
  const calcEventWidths = (events) => {
    // It should check whether it has a neighbor or not
    let eventWidths = [
      {
        width: secToPct(events[0].endTime - events[0].startTime),
        offset: secToPct(events[0].startTime),
      },
    ];
    for (let i = 1; i < events.length; i++) {
      const width = secToPct(events[i].endTime - events[i].startTime);
      const offset = secToPct(events[i].startTime - events[i - 1].endTime);
      eventWidths.push({
        width: width,
        offset: offset,
      });
    }

    return eventWidths;
  };

  const secToPct = (sec) => {
    const percent = (sec / 86400) * 100;
    return percent;
  };

  let eventWidths = calcEventWidths(events);
  const color = randomColor();
  return (
    <div className="flex items-center">
      <div className="text-s mr-3 text-center font-bold leading-8 rounded-full text-blue-600 bg-gray-200 w-8 h-8">
        {level}
      </div>
      <div className="events-wrapper flex w-full inline relative">
        {events.map((event, i) => (
          <Event
            width={eventWidths[i].width}
            offset={eventWidths[i].offset}
            startTime={event.startTime}
            endTime={event.endTime}
            index={event.index}
            color={color}
          />
        ))}
        <div className="line-container"></div>
      </div>
    </div>
  );
}
