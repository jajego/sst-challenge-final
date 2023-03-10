import React from "react";

export default function EventDetails({ startTime, endTime }) {
  return (
    <div className="event-details-wrapper absolute w-full">
      <div className="event-details flex justify-center mt-3">
        <div className="start mr-2">{startTime}</div>
        <div className="duration">-</div>
        <div className="end ml-2">{endTime}</div>
      </div>
    </div>
  );
}
