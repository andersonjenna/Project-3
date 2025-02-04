let gamesUrl = "http://127.0.0.1:5000/games";

d3.json(gamesUrl).then(function(data) {
    let gamesData = data;
    var scoresData=[];
    var differenceData=[];
    var layout1;
    for(let i = 0; i < gamesData.length; i++){
        // Comparing the winning teams scores each season
        if(gamesData[i].homeResult === 'WIN'){
            winningScore = gamesData[i].scoreHome
        }else{
            winningScore = gamesData[i].scoreAway
        }

        scoresData[i] = {score: winningScore,
                         season: gamesData[i].scheduleSeason}
        layout1 = {
            title : {
                text: "The Distribution of the winning scores from each season"
            },
            yaxis: {
                title: {
                    text: "Winning score"
                } 
            },
            xaxis: {
                title: {
                    text: "Football season"
                }, 
            },
            showlegend: false,
            
        }

        // Comparing the difference between the winning and losing team
        differenceData[i] = {score: Math.abs(gamesData[i].scoreHome-gamesData[i].scoreAway),
                         season: gamesData[i].scheduleSeason}
        layout2 = {
            title : {
                text: "Difference score"
            },
            yaxis: {
                title: {
                    text: "Difference score"
                } 
            },
            xaxis: {
                title: {
                    text: "Football season"
                } 
            },
            showlegend: false
        }
    }

    currentSeason = scoresData[0].season;

    var y0 = [];
    var y1 = [];
    var data = [];
    var data2 = [];
    for(let i = 0; i < scoresData.length;i++){
        if(scoresData[i].season === currentSeason){
            y0.push(scoresData[i].score)
            y1.push(differenceData[i].score)
        }else{
            let ref = y0;
            let trace = {
                name: currentSeason,
                y: ref,
                //boxpoints: 'all',
                type: 'box',
                marker: {
                    color: 'rgb(10,140,208)'
                  },
            };
            data.push(trace)
            y0 = [];

            let ref2 = y1;
            let trace2 = {
                name: currentSeason,
                y: ref2,
                //boxpoints: 'all',
                type: 'box',
                marker: {
                    color: 'rgb(10,140,208)'
                },
            };
            data2.push(trace2)
            y1 = [];
            currentSeason = scoresData[i].season;
        }
    }
    Plotly.newPlot('my_dataviz', data, layout1);
    Plotly.newPlot('my_dataviz2', data2, layout2);
  });
