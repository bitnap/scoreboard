import React from 'react'
import Header from "../components/Header";
import {CustomPlayer} from "../components/CustomPlayer";
import AddPlayerForm from "../components/AddPlayerForm";
import {connect} from "react-redux";

// import한 css는 글로벌로 뿌림
import styles from './Scoreboard.module.css';

class Scoreboard extends React.Component {
	getHighScore() {
		let highScore = 0;
		this.props.players.forEach(player => {
			if (player.score > highScore) {
				highScore = player.score;
			}
		});
		return highScore;

	}

	render() {
		return (
			<div className={styles.scoreboard}>
				<Header title="My Scoreboard" players={this.props.players} />

				{/*Player List*/}
				{
					this.props.players.map(player => {
						return (
							<CustomPlayer name={player.name} key={player.id}
														id={player.id}
														score={player.score}
														isHighScore={player.score === this.getHighScore ()} />
						)
					})
				}
				{/*// 2) 콜백함수를 props로 내려주기*/}
				<AddPlayerForm />
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	players: state.playerReducer.players
})

export default connect(mapStateToProps)(Scoreboard);
