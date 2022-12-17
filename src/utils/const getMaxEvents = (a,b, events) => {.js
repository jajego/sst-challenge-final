const getMaxEvents = (a, b, events) => {
  if (events.length === 0) return [];
  if (events.length === 1) return events[0];

  let eventMid = events[events.length / 2];
  let subEventsA = [];
  let subEventsB = [];
  for (let event of events) {
    if (event.startTime >= eventMid.endTime && event.startTime < b) {
      subEventsB.push(event);
    } else if (event.startTime <= eventMid.startTime && event.startTime > a) {
      subEventsA.push(event);
    }
  }

  returnMath.max(
    getMaxEvents(a, eventMid.startTime, subEventsA) +
      eventMid +
      getMaxEvents(eventMid.endTime, b, subEventsB),
    getMaxEvents(a, eventMid.startTime, subEventsA) +
      getMaxEvents(eventMid.endTime, b, subEventsB)
  );
};

getMaxEvents();
