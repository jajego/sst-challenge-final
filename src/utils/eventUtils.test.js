const { generateInput, handleInput } = require("./eventUtils");

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

// describe('')

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

test(`When two events start and end at the same time, the event with
      the lower index occupies a lower level`, () => {
  let inputs = [
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
});
