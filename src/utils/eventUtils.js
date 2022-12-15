const input = [
  {
    startTime: 0,
    endTime: 50,
  },
  {
    startTime: 25,
    endTime: 55,
  },
  {
    startTime: 35,
    endTime: 60,
  },
  {
    startTime: 45,
    endTime: 300,
  },
  {
    startTime: 100,
    endTime: 350,
  },
  {
    startTime: 305,
    endTime: 315,
  },
  {
    startTime: 320,
    endTime: 340,
  },
  {
    startTime: 330,
    endTime: 1000,
  },
  {
    startTime: 900,
    endTime: 20000,
  },
  {
    startTime: 1500,
    endTime: 20000,
  },
  {
    startTime: 25000,
    endTime: 50000,
  },
  {
    startTime: 55000,
    endTime: 86400,
  },
];

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

function handleInput(input) {
  let levels = [];

  const findNearestOpenLevel = (event, levels) => {
    let openLevel;
    for (let level of levels) {
      if (checkLevelOverlap(event, level)) {
        continue;
      } else {
        openLevel = level.level;
        break;
      }
    }
    if (openLevel === undefined) {
      levels.push({
        level: levels.length,
        events: [event],
      });
    } else {
      levels[openLevel].events.push(event);
    }
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

  for (let event of input) {
    findNearestOpenLevel(event, levels);
  }

  return levels;
}

module.exports = {
  generateInput,
  handleInput,
};
