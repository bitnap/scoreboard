import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Player } from './components/Player';

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 10, id: 2},
      {name: 'KIM', score: 20, id: 3},
      {name: 'PARK', score: 30, id: 4},
    ]
  }
  constructor() {
    super();
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
    this.handleChangeScore = this.handleChangeScore.bind(this);
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.state.players} />

        {/*Player List*/}
        {
          this.state.players.map(player => {
            return (
              <Player name={player.name} key={player.id}
                      id={player.id}
                      score={player.score}
                      changeScore={this.handleChangeScore}
                      removePlayer={this.handleRemovePlayer} />
            )
          })
        }
      </div>
    )
  }
  handleRemovePlayer(id) {
    console.log(this);
    console.log('handleRemovePlayer', id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id)
      return {players}
    })
  }
  handleChangeScore(id, delta) {
    console.log(id, delta);
    this.setState(prevState => {
      // id에 해당되는  player를 찾은 다음 score에 delta를 더한다.
      const players = [ ...prevState.players ];
      players.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      })
      return {players}
    })
  }
}

export default App;
