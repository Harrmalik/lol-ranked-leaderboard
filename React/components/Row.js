import React from 'react'

var Row = React.createClass({
    getInitialState() {
        return {

        }
    },
    render() {
        let summoner = this.props.summoner
        console.log(summoner);
        return (
            <tr>
                <td>{this.props.rank}</td>
              <td>
                <h4 className="ui image header inverted">
                  <img src="/images/avatar2/small/lena.png" className="ui mini rounded image"></img>
                  <div className="content">
                    {summoner.summonerName}
                    <div className="sub header">
                        {summoner.divisionName}
                  </div>
                </div>
              </h4></td>
              <td>
                {summoner.tier + ' ' + summoner.rank}
              </td>
              <td>
                {summoner.leaguePoints}
              </td>
              <td>
               {summoner.winrate}%
              </td>
              <td>
                {summoner.wins}
              </td>
              <td>
                {summoner.losses}
              </td>
            </tr>
        )
    }
});

export default Row
