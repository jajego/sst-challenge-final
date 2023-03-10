const generateInput = (howMany) => {
  // Generates howMany number of inputs
  let input = [];
  for (let i = 0; i < howMany; i++) {
    let startTime = Math.floor(Math.random() * 80000);
    input.push({
      startTime: startTime,
      endTime: Math.min(startTime + Math.floor(Math.random() * 10000), 86400),
      index: i,
    });
  }
  return input;
};

const sortEvents = (events) => {
  // Returns an array of levels
  let levels = [{ level: 0, events: [] }];

  // Sort events by endTime (ascending)
  events = events.sort((a, b) => a.endTime - b.endTime);

  // Core loop. It exits when all events have been placed.
  while (events.length > 0) {
    events = fillLevel(events, levels[levels.length - 1]);
    if (events.length !== 0) {
      levels.push({ level: levels.length, events: [] });
    }
  }
  return levels;
};

const fillLevel = (events, level) => {
  // Returns an array of remaining events after it fills the given level
  let endPoint = events[0].endTime;
  level.events.push(events[0]);
  let unplacedEvents = [];
  for (let i = 1; i < events.length; i++) {
    let startPoint = events[i].startTime;
    if (startPoint >= endPoint) {
      level.events.push(events[i]);
      endPoint = events[i].endTime;
    } else {
      unplacedEvents.push(events[i]);
    }
  }
  return unplacedEvents;
};

module.exports = {
  generateInput,
  sortEvents,
};
