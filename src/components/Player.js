import React from "react";
import { Counter } from './Counter';
import PropTypes from "prop-types";

export class Player extends React.Component {
	render() {
		console.log(this.props.name, ' rendered');	// 사용자 한명만 컨트롤해도 사용자 모두 렌더링 되는 문제를 해결예정

		const {removePlayer, id, name, score, changeScore} = this.props;

		return (
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => removePlayer(id)}> x </button>
					{name}
				</span>
				<Counter score={score}
								 id={id}
								 changeScore={changeScore}
				/>
			</div>
		)
	}
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log(nextProps);
		// score가 다를 경우에만 true를 반환
		return this.props.score !== nextProps.score;
		// return true;
	}

}

// 		const {removePlayer, id, name, score, changeScore} = this.props;
Player.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	score: PropTypes.number,
	removePlayer: PropTypes.func,
	changeScore: PropTypes.func
}
