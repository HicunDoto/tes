function bloodSchedule(jam, team) {
  const jamArr = jam
    .split(",")
    .map((i) => Number(i))
    .sort(function (a, b) {
      return a - b;
    });
  const teamArr = team;

  var output = [];
  var plot = 0;
  var objTeam = {};

  for (let index = 0; index < teamArr; index++) {
    objTeam[index + 1] = jamArr[index];
    output.push(index + 1);
  }

  for (let index = teamArr; index < jamArr.length; index++) {
    if (plot < teamArr) {
      let arr = Object.values(objTeam);
      let min = Math.min(...arr);

      if (jamArr[index] - min >= 2) {
        var teamKosong = Object.keys(objTeam).find((key) => objTeam[key] === min);
        objTeam[teamKosong] = jamArr[index];
        plot = parseInt(teamKosong);
      }
      output.push(plot);
    } else {
      plot = 0;
      output.push(plot);
    }
  }
  console.log(output);
}
