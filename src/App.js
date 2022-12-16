import { useState, useEffect } from "react";
import "./index.css";
import AddEventForm from "./components/AddEventForm";
import Timeline from "./components/Timeline";
import { generateInput, handleInput } from "./utils/eventUtils";

// function App() {
//   return (
//     <div className="App">
//       <AddEventForm />
//       <Timeline />
//     </div>
//   );
// }

function App() {
  const [events, setEvents] = useState([]);
  const [levels, setLevels] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [newEventStart, setNewEventStart] = useState();
  const [newEventEnd, setNewEventEnd] = useState();

  const addEvent = (e) => {
    e.preventDefault();
    console.log("button clicked", e.target);
    // if (
    //   newEventStart < 0 ||
    //   newEventStart > 86399 ||
    //   newEventEnd < 0 ||
    //   newEventEnd > 86400 ||
    //   newEventStart > newEventEnd
    // ) {
    //   alert(
    //     "Numbers must be between 0 and 86399, and Finish must be larger than Start."
    //   );
    // } else {
    setEvents([
      ...events,
      {
        startTime: Number(newEventStart),
        endTime: Number(newEventEnd),
        index: events.length,
      },
    ]);
    // }
    setNewEventStart("");
    setNewEventEnd("");
    setFormOpen(false);
  };

  const handleStartChange = (e) => {
    setNewEventStart(e.target.value);
  };
  const handleEndChange = (e) => {
    setNewEventEnd(e.target.value);
  };

  useEffect(() => {
    if (events.length > 0) {
      setLevels(handleInput(events));
    }
  }, [events]);

  const randomize = () => {
    setFormOpen(false);

    return setEvents(generateInput(250));
  };

  const resetTimeline = () => {
    setLevels([]);
    setEvents([]);
    setFormOpen(false);
  };

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  return (
    <div className="timeline-wrapper w-full flex flex-col justify-center items-center gap-10 p-10">
      <div className="text-3xl font-bold text-white bg-gray-600 px-5 py-2 rounded-full">
        Event timeline
      </div>
      <div className="header-buttons flex gap-3 justify-center">
        <button
          className="inline-block w-1/8 px-4 py-2 font-medium border border-2 border-gray rounded 
                  bg-white focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          onClick={randomize}
        >
          Randomize
        </button>
        <button
          className="inline-block w-1/8 px-4 py-2 font-medium border border-2 border-gray rounded 
                  bg-white focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          onClick={handleFormOpen}
        >
          Add 1 event
        </button>
        <button
          className="inline-block w-1/8 px-4 py-2  font-medium border border-2 border-gray
                  bg-white focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          onClick={resetTimeline}
        >
          Reset timeline
        </button>
      </div>

      {formOpen && (
        <AddEventForm
          addEvent={addEvent}
          newEventStart={newEventStart}
          handleStartChange={handleStartChange}
          newEventEnd={newEventEnd}
          handleEndChange={handleEndChange}
        />
      )}
      {levels.length > 0 && <Timeline levels={levels} />}
    </div>
  );
}
export default App;
