const generateInput = (howMany) => {
  let input = [];
  for (let i = 0; i < howMany; i++) {
    let startTime = Math.floor(Math.random() * 80000);
    input.push({
      startTime: startTime,
      endTime: startTime + Math.floor(Math.random() * 10000),
      index: i,
    });
  }
  return input;
};

function handleInput(events) {
  console.time("timeToSort");
  let levels = [{ level: 0, events: [] }];

  events = events.sort((a, b) => a.endTime - b.endTime);
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

  const checkLevelOverlap = (event, level) => {
    // Checks each event in a level for overlap with a given event and exits the loop if it finds it
    for (let levelEvent of level.events) {
      if (checkEventOverlap(event, levelEvent)) {
        return true;
      } else {
        continue;
      }
    }
    return false;
  };

  const checkEventOverlap = (event, levelEvent) => {
    return (
      (event.startTime >= levelEvent.startTime &&
        event.startTime <= levelEvent.endTime) ||
      (event.endTime >= levelEvent.startTime &&
        event.endTime <= levelEvent.endTime) ||
      (event.startTime <= levelEvent.startTime &&
        event.endTime >= levelEvent.endTime)
    );
  };

  while (events.length > 0) {
    events = fillLevel(events, levels[levels.length - 1]);
    if (events.length !== 0) {
      levels.push({ level: levels.length, events: [] });
    }
  }

  console.timeEnd("timeToSort");
  return levels;
}

// handleInput(generateInput(1000000));

module.exports = {
  generateInput,
  handleInput,
};
