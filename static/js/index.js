let gamesapi = 'http://127.0.0.1:5000/games';
let teamsapi = 'http://127.0.0.1:5000/teams';

d3.json(teamsapi).then(teamData => {
  console.log("Teams Data:", teamData);

  let teamSelect = document.getElementById('teamSelect');
  let teams = Object.keys(teamData);

  for (let i = 0; i < teams.length; i++) {
    let team = teamData[i].team_name;
    let option = document.createElement('option');
    option.value = team;
    option.textContent = team;
    teamSelect.appendChild(option);
  }

  let currentTeam = teams[0];
  updateChart(currentTeam);

  teamSelect.addEventListener('change', function() {
    currentTeam = this.value;
    updateChart(currentTeam);
    console.log(currentTeam)
  });
});

let ctx = document.getElementById('lineChart').getContext('2d');
let lineChart;

function updateChart(TeamName) {
  d3.json(gamesapi).then(gameData => {
    console.log("Games Data:", gameData);

    let wins = 0;
    let losses = 0;
    let ties = 0;

    for (let i = 0; i < gameData.length; i++) {
      let game = gameData[i];

      if (game.teamHome === TeamName) {
        if (game.homeResult === 'WIN') { wins++ }
        if (game.homeResult === 'TIE') { ties++ }
        if (game.homeResult === 'LOSS') { losses++ }
      }

      if (game.teamAway === TeamName) {
        if (game.awayResult === 'WIN') { wins++ }
        if (game.awayResult === 'TIE') { ties++ }
        if (game.awayResult === 'LOSS') { losses++ }
      }
    }

    if (lineChart) {
      lineChart.destroy();
    }

    lineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Results'],
          datasets: [
            {
              label: 'Wins',
              data: [wins],
              backgroundColor: 'rgba(30, 196, 21, 0.99)'
            },
            {
              label: 'Losses',
              data: [losses],
              backgroundColor: 'rgba(214, 7, 7, 0.66)'
            },
            {
                label: 'Ties',
                data: [ties],
                backgroundColor: 'rgba(231, 238, 38, 0.66)'
              }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }