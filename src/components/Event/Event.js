import React from "react";
import { useState, useEffect } from "react";
import EventDetails from "./EventDetails";

export default function Event({
  color,
  startTime,
  endTime,
  width,
  offset,
  index,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  useEffect(() => {});
  return (
    <div
      className="event hover:shadow-md"
      style={{
        position: "relative",
        width: width + "%",
        marginLeft: offset + "%",
        textAlign: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontSize: "0.75rem",
        borderRadius: "5px",
        zIndex: "100",
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
