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

  const fillLevel = (events, level) => {
    let unplacedEvents = [];
    for (let i = 0; i < events.length; i++) {
      if (canInsert(events[i], level)) {
        level.events.push(events[i]);
      } else {
        unplacedEvents.push(events[i]);
      }
    }

    return unplacedEvents;
  };

  // const fillLevels = (events, levels) => {
  //   if (events.length === 0) {
  //     return levels;
  //   }

  //   let unplacedEvents = fillLevel(events, levels[levels.length - 1]);

  //   if (unplacedEvents.length > 0) {
  //     levels.push({ level: levels.length, events: [] });
  //   }
  //   return fillLevels(unplacedEvents, levels);
  // };

  const canInsert = (event, level) => {
    if (checkLevelOverlap(event, level)) {
      return false;
    }
    return true;
  };

  const checkLevelOverlap = (event, level) => {
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

handleInput(generateInput(100000));

module.exports = {
  generateInput,
  handleInput,
};
