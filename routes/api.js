var express = require('express');
var router = express.Router();
var request = require('request');
var _ = require('lodash');
var summoners = require('../data/summoners.js');
var leagueApiKey = process.env.leagueApiKey;

let summonersIds = '';
_.forEach(summoners, function(summoner) {
    summonersIds += summoner.summonerID + ',';
});

summonersIds = summonersIds.slice(0, -1);

router.get('/getRankings', function(req, res, next) {
    let url =`https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/${summonersIds}/entry?api_key=${leagueApiKey}`
    request.get(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          let data = JSON.parse(body);
          let summoners = _.map(data, function(summoner) {
              return {
                  tier: summoner[0].tier,
                  name: summoner[0].entries[0].playerOrTeamName,
                  division: summoner[0].entries[0].division,
                  leaguePoints: summoner[0].entries[0].leaguePoints,
              };
          });

        res.json(summoners);
    } else {
        res.send(response);
    }
    });
});

module.exports = router;
