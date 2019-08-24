import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      hi
    </div>
  );
}
*/



// 삭제함수

const Header = (props) => {
  console.log(props);
  const {title, totalPlayers} = props;

  return (
    <header className="header">
      <h1 className="h1">{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
      {props.children}
    </header>
  );
}


class Counter extends React.Component {
  state = {
    score: 0,
    a: 10
  }

  constructor() {
    super();
    this.handleChangeScore = this.handleChangeScore.bind(this);
    //this.handleRemovePlayer = this.handleRemovePlayer.bind(this);

  }

  handleChangeScore(delta) {
    console.log('incrementScore ---> ', this);

    this.setState((prevState) => ({score: prevState.score + delta}));

  }

  render() {
    return (
      <div className="counter">

        <button className="counter-action decrement" onClick={() => this.handleChangeScore(-1)}> -</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={() => this.handleChangeScore(1)}> +</button>
      </div>
    );
  }

}

const Player = (props) => (
  <div className="player">
		<span className="player-name">
																					{/* 2. 자식에게 콜백함수를 props로 전달  */}
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
      {props.name}
		</span>
    <Counter />
  </div>
);


class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title='My Scoreboard' totalPlayers={11}/>
        {
          this.state.players.map(player => (								 	// 3. 클릭시 자식이 콜백함수를 호출
              <Player name={player.name} key={player.id} id={player.id} removePlayer={this.handleRemovePlayer} />
            )
          )
        }
      </div>
    )
  }

  //1. 부모에서 삭제하는 콜백함수를 만듦
  handleRemovePlayer = (id) =>  {
    console.log('handleRemovePlayer', id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id)
      return {players:players}
    })
  }

}






export default App;
