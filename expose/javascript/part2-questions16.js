//Question 16: JS Code in part2-question16.js

let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for (let key in statistics) {
  if (key[0] === 'r' || statistics[key] % 2 !== 0) {
    console.log(statistics[key]);
  }
}
