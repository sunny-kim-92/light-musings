const cheerio = require('cheerio');
const got = require('got');
const { find } = require('lodash');

async function getGames() {
  try {
    const res = await got(
      'https://www.365chess.com/search_result.php?wlname=carlsen&wname=&open=&blname=giri&bname=&eco=&nocolor=on&yeari=&yeare=&sply=1&ply=&res=&submit_search=1'
    );
    console.log(res.body)
    const dateRegex = /<td align="center" id="col-dat">(.*)<\/td>/g
    const dates = res.body.match(dateRegex)
    // console.log(dates)

    const gameRegex = /<script>(.*)<\/script>/g;
    const games = res.body.match(gameRegex);
    // console.log(games);

    let finalGames = [];
    let tempObj = {};

    // const whiteRegex = /\['w'\]="(.*)";g\[([0-9]*)\]\['b'\]/g;
    // const blackRegex = /\['b'\]="(.*)";g\[([0-9]*)\]\['r'\]/g;
    // const resultRegex = /\['r'\]="(.*)";g\[([0-9]*)\]\['e'\]/g;
    // const ecoRegex = /\['e'\]="(.*)";g\[([0-9]*)\]\['t'\]/g;
    // const tournamentRegex = /\['t'\]="(.*)";g\[([0-9]*)\]\['p'\]/g;
    // const movesRegex = /\['p'\]="(.*)";<\/script>/g;
    // const idRegex = /\[([0-9]*)\]/g;
    // const yearRegex = /<script>(.*)";g\[/g

    games.forEach((game) => {
      if (game.indexOf("['w']") != -1) {
        let white = /\['w'\]="(.*)";g\[([0-9]*)\]\['b'\]/.exec(game);
        if (white) {
          tempObj = {
            white: white[1],
            black: /\['b'\]="(.*)";g\[([0-9]*)\]\['r'\]/.exec(game)[1],
            result: /\['r'\]="(.*)";g\[([0-9]*)\]\['e'\]/.exec(game)[1],
            eco: /\['e'\]="(.*)";g\[([0-9]*)\]\['t'\]/.exec(game)[1],
            tournament: /\['t'\]="(.*)";g\[([0-9]*)\]\['p'\]/.exec(game)[1],
            moves: /\['p'\]="(.*)";<\/script>/.exec(game)[1],
            id: /\[([0-9]*)\]/.exec(game)[1],
          }
          finalGames.push(tempObj)
          // console.log(tempObj)
        }
      }
    });
    finalGames.forEach((game) => {
      game['year'] = />([0-9]*)</g.exec(dates.shift())[1]
    })
    return finalGames
    // console.log(finalGames)
  } catch (err) {
    console.log(err.response.data);
  }
}

getGames();
