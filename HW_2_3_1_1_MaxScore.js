const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let scorePoints = [];

for (let index in players) {
  scorePoints.push(players[index].scorePoints);
}

let maxScore = Math.max(...scorePoints);

for (let player of players) {
  if (player.scorePoints === maxScore) {
    console.log(
      "Player with the maximum of scorePoints is: " +
        player.name +
        " and he/she has " +
        maxScore +
        " points"
    );
    break;
  }
}
