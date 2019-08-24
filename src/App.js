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
        <Header title="My Scoreboard" totalPlayers={11} />

        {/*Player List*/}
        {
          this.state.players.map(player => {
            return (
              <Player name={player.name} key={player.id}
                      id={player.id}
                      score={player.score}
                      changeScore={this.handleChangeScore}
                      removePlayer={this.handleRemovePlayer}/>
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
  }             // player의 id값
  handleChangeScore(id, delta) {
    console.log(id, delta);
    this.setState(prevState => {
      // id에 해당되는 player를 찾고 score에 delta를 더한다.
      const players = [ ...prevState.players ];
      players.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      })              // 원본 배열은 유지하되 새로운 배열을 위한 공간 활용 ->  //  [ ... ] 브라켓 안에 스프레드 연산자 사용
      return {players}
    });
  }
}

export default App;
