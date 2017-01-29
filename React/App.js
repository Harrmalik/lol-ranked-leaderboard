import React from 'react'
import ReactDom from 'react-dom'
import Row from './components/Row'

var App = React.createClass({
    getInitialState() {
        return {
            data: [],
            rank: 0
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
    eachSummoner(summoner, index) {
         return (
             <Row
                key={summoner.name}
                summoner={summoner}
                rank={index + 1} />
        )
    },
    render() {
        return (
            <div className="main">
                <section className="ui container">
                <table className="ui striped inverted table">
                  <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Summoner</th>
                        <th>Tier/Division</th>
                        <th>Points</th>
                        <th>Winrate</th>
                        <th>Wins</th>
                        <th>Losses</th>
                    </tr>
                  </thead>
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
