import React from "react";

export default function AddEventForm({
  addEvent,
  newEventStart,
  handleStartChange,
  newEventEnd,
  handleEndChange,
}) {
  return (
    <form
      className="flex flex-col items-center justify-center shadow-sm gap-2 rounded-md px-16 py-7 bg-white"
      onSubmit={addEvent}
    >
      <input
        className="form-control
        block
        w-full
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        value={newEventStart}
        onChange={handleStartChange}
        placeholder="Start"
        required
      />
      <input
        className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
   
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        value={newEventEnd}
        onChange={handleEndChange}
        placeholder="Finish"
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
  );
}