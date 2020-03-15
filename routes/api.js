var express = require('express');
var router = express.Router();
var request = require('request');
var rp = require('request-promise');
var Promise = require('bluebird');
var _ = require('lodash');
var summoners = require('../data/summoners.js');
let leagueApiKey = process.env.leagueApiKey;
var api = 'https://na.api.pvp.net/api/lol/na/'

let summonersIds = '';
_.forEach(summoners, function(summoner) {
    summonersIds += summoner.summonerID + ',';
});

summonersIds = summonersIds.slice(0, -1);

router.get('/getRankings', function(req, res, next) {
    console.log('aye')
    let url =`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/aMbmGF-7Yr1Y1-u0n2To6i35gOhjGCdRy5E1OcC2tXyTYbQ`;
    request.get({
      url,
      headers: {
        "X-Riot-Token": leagueApiKey
      }
    }, function (error, response, body) {
      console.log('yerrr');
      console.log(body);
      if (!error && response.statusCode == 200) {
          let data = JSON.parse(body);
          // let summoners = _.map(data, function(summoner, key) {
          //     var demo;
          //     return {
          //         tier: summoner[0].tier,
          //         name: summoner[0].entries[0].playerOrTeamName,
          //         divisionName: summoner[0].name,
          //         division: summoner[0].entries[0].division,
          //         leaguePoints: summoner[0].entries[0].leaguePoints,
          //         wins: summoner[0].entries[0].wins,
          //         losses: summoner[0].entries[0].losses,
          //         winrate: Math.round(summoner[0].entries[0].wins/(summoner[0].entries[0].losses + summoner[0].entries[0].wins) * 100),
          //         points: calculatePoints(summoner[0].tier, summoner[0].entries[0].division, summoner[0].entries[0].leaguePoints)
          //     };

            //   let recentGamesUrl = `${api}v1.3/game/by-summoner/${key}/recent?api_key=${leagueApiKey}`;
            //   rp(recentGamesUrl)
            //     .then((data) => {
            //         console.log('rp');
            //         demo = {
            //             tier: summoner[0].tier,
            //             name: summoner[0].entries[0].playerOrTeamName,
            //             divisionName: summoner[0].name,
            //             division: summoner[0].entries[0].division,
            //             leaguePoints: summoner[0].entries[0].leaguePoints,
            //             wins: summoner[0].entries[0].wins,
            //             losses: summoner[0].entries[0].losses
            //         };
            //         return demo
            //     });
          // });

                    let summoners = data
        res.json(summoners.sort(function(a, b) {
            return b.points - a.points;
        }));
    } else {
        res.send(response);
    }
    });
});

router.get('/getRankings', function(req, res, next) {
    console.log('aye')
    let url =`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/nomunkeybizz`;
    request.get({
      url,
      headers: {
        "X-Riot-Token": leagueApiKey
      }
    }, function (error, response, body) {
      console.log('yerrr');
      console.log(body);
      if (!error && response.statusCode == 200) {
          let data = JSON.parse(body);
                    let summoners = data
        res.json(summoners.sort(function(a, b) {
            return b.points - a.points;
        }));
    } else {
        res.send(response);
    }
    });
});

var calculatePoints = (tier, division, lp) => {
    console.log(tier);
    let points = 0;
    switch (tier) {
        case 'GOLD':
            points += 1000;
            break;
        case 'SILVER':
            points += 500;
            break;
        case 'BRONZE':
            points += 100;
            break;
    }

    switch (division) {
        case 'I':
            points += 500;
            break;
        case 'II':
            points += 400;
            break;
        case 'III':
            points += 300;
            break;
        case 'IV':
            points += 200;
            break;
        case 'V':
            points += 100;
            break;
    }

    points += lp;
    return points;
}

let summonerIds = {
  {
    username: 'NoMunkeyBizz',
    id: "aMbmGF-7Yr1Y1-u0n2To6i35gOhjGCdRy5E1OcC2tXyTYbQ"
  },
  {
    username: "BluCharizard",
    id: "wzvmFVnijegfzOi5aVd59wS5rTyxKt2-H0U10GvzNhSzKWQ"
  }
}

module.exports = router;
