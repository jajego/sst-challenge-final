const { generateInput, handleInput } = require("./eventUtils");

describe("Testing when events overlap", () => {
  test("When a new event starts during and ends after an event, the two events are placed on separate levels", () => {
    let inputs = [
      {
        startTime: 0,
        endTime: 50,
      },
      {
        startTime: 25,
        endTime: 55,
      },
    ];

    let levels = handleInput(inputs);
    expect(levels.length).toBe(2);
    expect(levels[0].events[0]).toBe(inputs[0]);
    expect(levels[1].events[0]).toBe(inputs[1]);
  });

  test("When a new event starts before and ends after an event, the two events are placed on separate levels", () => {
    let inputs = [
      {
        startTime: 50,
        endTime: 500,
      },
      {
        startTime: 30,
        endTime: 600,
      },
    ];

    let levels = handleInput(inputs);
    expect(levels.length).toBe(2);
    expect(levels[0].events[0]).toBe(inputs[0]);
    expect(levels[1].events[0]).toBe(inputs[1]);
  });

  test("When a new event starts before and ends during an event, the two events are placed on separate levels", () => {
    let inputs = [
      {
        startTime: 50,
        endTime: 500,
      },
      {
        startTime: 0,
        endTime: 400,
      },
    ];

    let levels = handleInput(inputs);
    expect(levels.length).toBe(2);
    expect(levels[0].events[0]).toBe(inputs[0]);
    expect(levels[1].events[0]).toBe(inputs[1]);
  });

  test("When a new event starts and ends during an event, the two events are placed on separate levels", () => {
    let inputs = [
      {
        startTime: 50,
        endTime: 500,
      },
      {
        startTime: 100,
        endTime: 400,
      },
    ];

    let levels = handleInput(inputs);
    expect(levels.length).toBe(2);
    expect(levels[0].events[0]).toBe(inputs[0]);
    expect(levels[1].events[0]).toBe(inputs[1]);
  });

  test("When an event begins during one event and ends during another event that are on the same level, the new event is placed on a separate level", () => {
    let inputs = [
      {
        startTime: 50,
        endTime: 90,
      },
      {
        startTime: 100,
        endTime: 400,
      },
      {
        startTime: 75,
        endTime: 400,
      },
    ];

    let levels = handleInput(inputs);
    console.log(levels);
    expect(levels.length).toBe(2);
    expect(levels[0].events[0]).toBe(inputs[0]);
    expect(levels[0].events[1]).toBe(inputs[1]);
    expect(levels[1].events[0]).toBe(inputs[2]);
  });
});

test("When two events don't overlap, they are placed on the same level", () => {
  let inputs = [
    {
      startTime: 0,
      endTime: 50,
    },
    {
      startTime: 100,
      endTime: 200,
    },
  ];

  let levels = handleInput(inputs);
  expect(levels[0].events.length).toBe(2);
  expect(levels[0].events[0]).toBe(inputs[0]);
  expect(levels[0].events[1]).toBe(inputs[1]);
});

test(`When 5 events start and end at the same time, events with
      lower indices occupy lower levels`, () => {
  let inputs = [
    {
      startTime: 25,
      endTime: 50,
    },
    {
      startTime: 25,
      endTime: 50,
    },
    {
      startTime: 25,
      endTime: 50,
    },
    {
      startTime: 25,
      endTime: 50,
    },
    {
      startTime: 25,
      endTime: 50,
    },
  ];

  let levels = handleInput(inputs);
  expect(levels[0].events[0]).toBe(inputs[0]);
  expect(levels[1].events[0]).toBe(inputs[1]);
  expect(levels[2].events[0]).toBe(inputs[2]);
  expect(levels[3].events[0]).toBe(inputs[3]);
  expect(levels[4].events[0]).toBe(inputs[4]);
});
