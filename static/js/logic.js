let url = "http://127.0.0.1:5000/games";

d3.json(url).then(function(data) {
    let gamesData = data;
    //console.log(gamesData);
    var scoresData=[];

    for(let i = 0; i < gamesData.length; i++){
        // if(gamesData[i].scoreHome > gamesData[i].scoreAway){
        //     winningScore = gamesData[i].scoreHome
        // }else{
        //     winningScore = gamesData[i].scoreAway
        // }

        // scoresData[i] = {score: winningScore,
        //                  season: gamesData[i].scheduleSeason}

        if(gamesData[i].scoreHome > gamesData[i].scoreAway){
            scoresData[i] = {score: (gamesData[i].scoreHome-gamesData[i].scoreAway),
                season: gamesData[i].scheduleSeason}
        }else{
            scoresData[i] = {score: (gamesData[i].scoreAway-gamesData[i].scoreHome),
                season: gamesData[i].scheduleSeason}
        }
    }
    currentSeason = scoresData[0].season;

    var y0 = [];
    var data = [];
    for(let i = 0; i < scoresData.length;i++){
        if(scoresData[i].season === currentSeason){
            y0.push(scoresData[i].score)
        }else{
            let ref = y0;
            let trace = {
                name: currentSeason,
                y: ref,
                type: 'box'
            };
            data.push(trace)
            y0 = [];
            currentSeason = scoresData[i].season;

        }
    }
    Plotly.newPlot('my_dataviz', data);
    console.log(scoresData);
  });
