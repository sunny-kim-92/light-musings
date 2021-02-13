const cheerio = require('cheerio');
const got = require('got');
const { find } = require('lodash');

(async () => {
  try {
    const res = await got(
      'https://www.365chess.com/search_result.php?wlname=carlsen&wname=&open=&blname=giri&bname=&eco=&nocolor=on&yeari=&yeare=&sply=1&ply=&res=&submit_search=1'
    );
    // console.log(res.body)
    const regex = /<script>(.*)<\/script>/g
    const found = res.body.match(regex);
    console.log(found)

    // console.log(res.body)

    // const $ = cheerio.load(res.body, { xmlMode: true });

    // const $ = cheerio.load(res.body);

    // let scripts = $(`script:not([src])`)
    // console.log(typeof scripts)
    // scripts.forEach((val) => {
    //   console.log(val.children[0].data)
    // })



    // scripts.forEach((val) => {
    //   console.log(val)
    // console.log(val[0].children.data)
    // })
    // console.log(scripts);



    // var textNode = $('script:not([src])')
    //   .map((i, x) => x.children[0])
    //   .get(0);

    // if (textNode) {
    //   var scriptText = textNode.data
      //   .replace(/\r?\n|\r/g, '')
      //   .replace(/file:/g, '"file":')
      //   .replace(/label:/g, '"label":');
      // var jsonString = /sources:(.*)}\);/.exec(scriptText)[1];
      // var sources = JSON.parse(jsonString);
      // console.log(source);
    // }



    // $('script:not([src])').each((idx, elem) => console.log(elem.text()));

  } catch (err) {
    console.log(err.response.data);
  }
})();

//   .then(res => {
//     let links = cheerio.load(res);
//     return links;
//   })
//   .then($ => {
//     let titlesArr = []
//     let linksArr = [];
//     $(`td`)
//       .find(`a`)
//       .attr(`href`, (i, val) => {
//         linksArr.push(val);
//       });
//     $(`a.case-title`).text((i, val) => {
//       titlesArr.push([i, val])
//     })
//     console.log(titlesArr)
//     return linksArr;
//   })
//   .then(arr => {
//     let final = arr.filter(url => {
//       if (typeof url === "string") {
//         return (
//           url.substring(0, 43) ===
//           "https://www.scotusblog.com/case-files/cases"
//         );
//       } else return false;
//     });
//     console.log(final)
//     return final;
//   })
//   .then(caseLinks => {
//     let tempObj = {};
//     let tempPetitioner = [];
//     let tempRespondent = [];
//     let tempName = "";
//     caseLinks.forEach((url, index) => {
//       tempObj = {};
//       rp(url)
//         .then(res => {
//           let final = cheerio.load(res);
//           return final;
//         })
//         .then($ => {
//           tempName = 'Case ' + index
//           tempHold = {}
//           tempPetitioner = [];
//           tempRespondent = [];
//           $(`tr.color6`)
//             .find(`a`)
//             .attr(`title`, (i, val) => {
//               tempPetitioner.push(val.replace('Brief amici curiae of ', '').replace('Brief amicus curiae of ', '').replace(' filed.', '').replace(' (Distributed)', '')
//               .replace(' VIDED.', ''))
//             });
//           $(`tr.color7`)
//             .find(`a`)
//             .attr(`title`, (i, val) => {
//               tempRespondent.push(val.replace('Brief amici curiae of ', '').replace('Brief amicus curiae of ', '').replace(' filed.', '').replace(' (Distributed)', '')
//               .replace(' VIDED.', ''))
//             });
//             tempHold['Respondent'] = tempRespondent
//             tempHold['Petitioner'] = tempPetitioner
//             tempObj[tempName] = tempHold
//         });
//     })
//   })
