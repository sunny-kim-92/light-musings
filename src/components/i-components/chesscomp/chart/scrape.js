const cheerio = require('cheerio');
const got = require('got');
const { find } = require('lodash');

let finalData = []

async function getGames(pair) {
  try {
    const playerOneFirst = pair[0][0]
    const playerOneLast = pair[0][1]
    const playerTwoFirst = pair[1][0]
    const playerTwoLast = pair[1][1]
    console.log(pair)
    // console.log(playerOneFirst + playerOneLast + playerTwoFirst + playerTwoLast)

    const res = await got(
      'https://www.365chess.com/search_result.php?wlname='
      + playerOneLast
      +'&wname='
      + playerOneFirst
      + '&open=&blname='
      + playerTwoLast
      + 'giri&bname='
      + playerTwoFirst
      + '&eco=&nocolor=on&yeari=&yeare=&sply=1&ply=&res=&submit_search=1'
    );
    const dateRegex = /<td align="center" id="col-dat">(.*)<\/td>/g;
    const dates = res.body.match(dateRegex);

    const gameRegex = /<script>(.*)<\/script>/g;
    const games = res.body.match(gameRegex);

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

    games.forEach(game => {
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
          };
          finalGames.push(tempObj);
        }
      }
    });
    finalGames.forEach(game => {
      game['year'] = />([0-9]*)</g.exec(dates.shift())[1];
    });
    finalData.push(finalGames)
  } catch (err) {
    console.log(err.response.data);
  }
}

const names = [
  ['maxime', 'vachier+lagrave'],
  ['magnus', 'carlsen'],
  ['anish', 'giri'],
  ['hikaru', 'nakamura'],
  ['alireza', 'firouzja'],
  ['fabiano', 'caruana'],
  ['levon', 'aronian'],
  ['wesley', 'so'],
];

let playerPairs = [];
for (let i = 0; i < names.length - 1; i++) {
  // This is where you'll capture that last value
  for (let j = i + 1; j < names.length; j++) {
    playerPairs.push([names[i], names[j]]);
  }
}
// console.log(playerPairs)

(async() => {
  // for (const pair of playerPairs) {
  //   await getGames(pair);
  // }
  await Promise.all(playerPairs.map(async (pair) => {
    await getGames(pair)
  }));
  console.log(finalData)
})()