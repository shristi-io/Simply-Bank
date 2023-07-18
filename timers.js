"use strict";

const pizzaTime = setTimeout(
  (item1, item2) => {
    console.log(`Here is your pizza with ${item1} and ${item2}`);
  },
  5000,
  "chicken",
  "capsicum"
);

// We can stop the timer using clearTimeout(pizzaTime);
