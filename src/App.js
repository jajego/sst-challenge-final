import { useState, useEffect } from "react";
import "./index.css";
import AddEventForm from "./components/AddEventForm";
import Timeline from "./components/Timeline";
import { generateInput, handleInput } from "./utils/eventUtils";

function App() {
  const [events, setEvents] = useState([]);
  const [levels, setLevels] = useState([]);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    if (events.length > 0) {
      setLevels(handleInput(events));
    }
  }, [events]);

  const randomize = (howMany) => {
    setFormOpen(false);

    return setEvents(generateInput(howMany));
  };

  const resetTimeline = () => {
    setLevels([]);
    setEvents([]);
    setFormOpen(false);
  };

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const buttonClass = `
                  inline-block w-1/8 px-4 py-2 font-medium border border-2 border-gray rounded 
                  bg-white focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
  `;

  return (
    <div className="timeline-wrapper w-full flex flex-col justify-center items-center gap-10 p-10">
      <div className="text-3xl font-bold text-white bg-gray-600 px-5 py-2 rounded-full">
        Event timeline
      </div>
      <div className="header-buttons flex gap-3 justify-center">
        <button
          className={`${buttonClass}`}
          onClick={() => {
            randomize(50);
          }}
        >
          Randomize 50
        </button>
        <button
          className={`${buttonClass}`}
          onClick={() => {
            randomize(250);
          }}
        >
          Randomize 250
        </button>
        <button
          className={`${buttonClass}`}
          onClick={() => {
            randomize(1000);
          }}
        >
          Randomize 1000
        </button>
        <button className={`${buttonClass}`} onClick={handleFormOpen}>
          Add 1 event
        </button>
        <button className={`${buttonClass}`} onClick={resetTimeline}>
          Reset timeline
        </button>
      </div>
      {formOpen && (
        <AddEventForm
          events={events}
          setEvents={setEvents}
          setFormOpen={setFormOpen}
        />
      )}
      {levels.length > 0 && <Timeline levels={levels} />}
    </div>
  );
}
export default App;
