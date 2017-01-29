import React from 'react'

var Row = React.createClass({
    getInitialState() {
        return {

        }
    },
    render() {
        let summoner = this.props
        return (
            <tr>
              <td>
                <h4 className="ui image header">
                  <img src="/images/avatar2/small/lena.png" className="ui mini rounded image"></img>
                  <div className="content">
                    {summoner.name}
                    <div className="sub header">{summoner.tier + ' ' + summoner.division}
                  </div>
                </div>
              </h4></td>
              <td>
                {summoner.points}
              </td>
            </tr>
        )
    }
});

export default Row
