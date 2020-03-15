import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Pages
import PlayerCard from './components/PlayerCard'

function App() {
  const [players, setPlayers] = useState([
    {
      summonerId: "aMbmGF-7Yr1Y1-u0n2To6i35gOhjGCdRy5E1OcC2tXyTYbQ",
      accountId: "_uVR7zM9ad_7IpQxs2sOmwSD9g6xJDZ5e6pgjgkmuM6EkQ",
      username: "NoMunkeyBizz",
      avatar: "http://ddragon.leagueoflegends.com/cdn/10.5.1/img/profileicon/4391.png",
      backdrop: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_1.jpg",
      summonerLevel: "145",
      rank: "Gold IV",
      lp: "44"
    },
    {
      summonerId: "wzvmFVnijegfzOi5aVd59wS5rTyxKt2-H0U10GvzNhSzKWQ",
      accountId: "C-B6Atw2Jsc_ky2hf9mCgSnOd7o_dn7ottaEoqAoj1x4Lg",
      username: "BluCharizard",
      avatar: "http://ddragon.leagueoflegends.com/cdn/10.5.1/img/profileicon/588.png",
      backdrop: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_6.jpg",
      summonerLevel: "126",
      rank: "Gold II",
      lp: "0"
    }
  ])

  return (
    <div id="app">
      <PlayerCard
        user={players[0]}
      ></PlayerCard>
      <img id="vs-png" src="https://i.imgur.com/NSptv9M.jpg"></img>
      <PlayerCard
        user={players[1]}
      ></PlayerCard>
    </div>
  );
}

export default App;
