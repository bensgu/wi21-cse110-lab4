let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2,
}

for (let carStat in statistics) {
  if (carStat.charAt(0) == "r" || statistics[carStat] % 2 != 0)
    console.log(statistics[carStat]);
}
