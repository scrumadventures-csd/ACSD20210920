let data = {
  1: "2",
  2: "2",
  3: "5",
  4: "6",
  5: "7",
  6: "3",
  7: "9",
  8: "2",
  9: "3",
  10: "8",
  11: "8",
  12: "8",
  13: "8",
  14: "2",
  15: "1",
  16: "9",
  17: "2",
  18: "8",
  19: "1",
  20: "9",
  21: "0",
};
// from the API provided we will expect to get the number of pins knocked down per ball.
// from that we will calculate the score
const getPins = (ball) => {
  let pins = data[ball];
  return pins;
};

module.exports = {
  getPins,
};
