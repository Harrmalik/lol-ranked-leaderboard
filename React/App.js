import React from 'react'
import ReactDom from 'react-dom'
import Row from './components/Row'

var App = React.createClass({
    getInitialState() {
        return {
            data: []
        }
    },
    componentDidMount() {
        this.getRankings()
    },
    getRankings() {
        let component = this

        $.get('/api/getRankings', function(data) {
            component.setState({data})
        })
    },
    eachSummoner(summoner) {
         return (
             <Row
                key={summoner.name}
                name={summoner.name}
                tier={summoner.tier}
                division={summoner.division}
                points={summoner.points}
                leaguePoints={summoner.leaguePoints} />
        )
    },
    render() {
        return (
            <div className="main">
                <section className="ui container">
                <table className="ui very basic collapsing celled table">
                  <thead>
                    <tr><th>Summoner</th>
                    <th>League Points</th>
                  </tr></thead>
                  <tbody>
                    {this.state.data.map(this.eachSummoner)}
                  </tbody>
                </table>

                </section>

                <footer>

                </footer>
            </div>
        )
    }
})

ReactDom.render(<App />,
document.getElementById('react-app'))
