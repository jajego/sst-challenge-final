import React from "react";
import { useState, useEffect } from "react";
import EventDetails from "./EventDetails";
import { randomColor } from "randomcolor";

export default function Event({ startTime, endTime, width, offset, index }) {
  //   console.log(`My width is ${width}% and my offset is ${offset}%`);
  const [isHovering, setIsHovering] = useState(false);
  const [color, setColor] = useState(randomColor());
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  useEffect(() => {});
  return (
    <div
      className="event"
      style={{
        position: "relative",
        width: width + "%",
        marginLeft: offset + "%",
        textAlign: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontSize: "0.75rem",
        borderRadius: "5px",
        // border: "2px solid black",
        zIndex: "100",
        transitionDuration: "0.1s",
        fontFamily: "Courier",
        backgroundColor: `${color}`,
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {index}
      {isHovering && <EventDetails startTime={startTime} endTime={endTime} />}
    </div>
  );
}
