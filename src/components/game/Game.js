import React from 'react'
import Team from '../team/Team'
import ScoreBoard from '../scoreboard/Scoreboard'


class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resetCount: 0,
            homeTeamStats: {
                shots: 0,
                score: 0
            },
            visitingTeamStats: {
                shots: 0,
                score: 0
            }
        }
        this.shotSound = new Audio('https://www.pacdv.com/sounds/voices/pssst-2.wav')
        this.scoreSound = new Audio('https://www.pacdv.com/sounds/voices/nice-work.wav')
    }
    shoot = (team) => {
        const teamStatsKey = `${team}TeamStats`
        let score = this.state[teamStatsKey].score
        this.shotSound.play()
        if (Math.random() > 0.5) {
            score += 1
            this.scoreSound.play()
        }

        this.setState((state, props) => ({
            [teamStatsKey]: {
                shots: state[teamStatsKey].shots + 1,
                score
            }
        }))
    }
    resetGame = () => {
        this.setState((state, props) => ({
            resetCount: state.resetCount + 1,
            homeTeamStats: {
                shots: 0,
                score: 0
            },
            visitingTeamStats: {
                shots: 0,
                score: 0
            }
        }))


    }
    render() {
        return (
            <div className='Game'>
                <ScoreBoard 
                visitingTeamStats = {this.state.visitingTeamStats}
                homeTeamStats = {this.state.homeTeamStats}
                
                />
                <h1>Welcome to {this.props.venue}</h1>
                <div className='stats'>
                    <Team name={this.props.visitingTeam.name}
                        logo={this.props.visitingTeam.logo}
                        stats={this.state.visitingTeamStats}
                        shotHandler={() => this.shoot('visiting')} />
                    <div className='versus'>
                        <h1>VS</h1>
                        <div>
                            <strong>Resets:</strong>{this.state.resetCount}
                        </div>
                        <button onClick = {this.resetGame}>Reset Game</button>
                    </div>
                    <Team name={this.props.homeTeam.name}
                        logo={this.props.homeTeam.logo}
                        stats={this.state.homeTeamStats}
                        shotHandler={() => this.shoot('home')} />
                </div>
            </div>
        )
    }
}

export default Game