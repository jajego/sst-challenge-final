import React from "react";
import { useState } from "react";

export default function AddEventForm({ events, setEvents, setFormOpen }) {
  const [newEventStart, setNewEventStart] = useState("");
  const [newEventEnd, setNewEventEnd] = useState("");
  const [error, setError] = useState(null);

  const handleStartChange = (e) => {
    setNewEventStart(e.target.value);
  };
  const handleEndChange = (e) => {
    setNewEventEnd(e.target.value);
  };

  const handleError = (e) => {
    setError(e);
    setNewEventStart("");
    setNewEventEnd("");
    document.getElementsByTagName("input")[0].focus();
    setTimeout(() => {
      setError(null);
    }, 10000);
  };

  const validateInput = (start, end) =>
    start >= 0 && start <= 86399 && end > start && end <= 86400;

  const addEvent = (e) => {
    e.preventDefault(e);

    let eventStart = parseInt(newEventStart);
    let eventEnd = parseInt(newEventEnd);
    if (!validateInput(eventStart, eventEnd))
      return handleError(
        "⚠️ Numbers must be between 0 and 86399, and End must be larger than Start. ⚠️"
      );

    setEvents([
      ...events,
      {
        startTime: newEventStart,
        endTime: newEventEnd,
        index: events.length,
      },
    ]);
    setNewEventStart("");
    setNewEventEnd("");
    setFormOpen(false);
  };

  let inputStyle = `
                    form-control
                    block
                    w-42
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  `;

  return (
    <div className="form-wrapper flex flex-col items-center w-50">
      {error && (
        <div className="text-center text-red-400 w-2/5 py-2 pb-5">{error}</div>
      )}
      <form
        className="flex flex-col items-center justify-center shadow-sm gap-2 rounded-md px-16 py-7 bg-white"
        onSubmit={addEvent}
      >
        <input
          className={`${inputStyle}`}
          value={newEventStart}
          onChange={handleStartChange}
          placeholder="Start"
          autoFocus
          required
        />
        <input
          className={`${inputStyle}`}
          value={newEventEnd}
          onChange={handleEndChange}
          placeholder="End"
          required
        />
        <button
          className="inline-block 
                    w-2/5
                    px-4 
                    py-2 
                    font-medium 
                    border
                    border-2
                    border-gray
                    rounded 
                    bg-white
                    focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg "
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}
