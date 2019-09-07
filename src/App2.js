import React from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';
import {connect} from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.props.players} />

        {/*Player List*/}
        {
          this.props.players.map(player => {
            return (
              <Player name={player.name} key={player.id}
                      id={player.id}
                      score={player.score}
                      // changeScore={this.handleChangeScore}
                      removePlayer={this.handleRemovePlayer} />
            )
          })
        }
        {/*// 2) 콜백함수를 props로 내려주기*/}
        <AddPlayerForm />
      </div>
    )
  }
  // handleRemovePlayer(id) {
  //   console.log(this);
  //   console.log('handleRemovePlayer', id);
  //   this.setState(prevState => {
  //     const players = prevState.players.filter(player => player.id !== id)
  //     return {players}
  //   })
  // }

  // handleChangeScore(id, delta) {
  //   console.log(id, delta);
  //   this.setState(prevState => {
  //     // id에 해당되는  player를 찾은 다음 score에 delta를 더한다.
  //     const players = [ ...prevState.players ];
  //     players.forEach(player => {
  //       if (player.id === id) {
  //         player.score += delta;
  //       }
  //     })
  //     return {players}
  //   })
  // }
  // 1) 콜백함수 정의
  // handleAddPlayer = (name) => {
  //   console.log(name);
  //   // add player 로직이 들어올 부분
  //   this.setState(prevState => {
  //     // 원본배열 훼손없이 deep copy 를 해야함
  //     const players = [ ...prevState.players ];   // 상위 players[] 배열 훼손없이 카피했음.
  //
  //     players.push({name:name, score:0, id:++this.maxId}); // 원본배열에 새로운 배열 추가부분 push - 뒤에추가, unshift - 앞에 추가
  //                                                                                     // pop - 뒤에것 삭제, shift - 맨 앞에것 삭제
  //     return {players};
  //   });
  //
  // }
}

const mapStateToProps = (state) => ({
  players: state.playerReducer.players
})

export default connect(mapStateToProps)(App);
