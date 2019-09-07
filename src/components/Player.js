import React from "react";
import Counter from './Counter';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";

class Player extends React.Component {
	static propTypes = {
		id: PropTypes.number,
		name: PropTypes.string,
		score: PropTypes.number,
		removePlayer: PropTypes.func,
		changeScore: PropTypes.func
	}

	render() {
		console.log(this.props.name, ' rendered');	// 사용자 한명만 컨트롤해도 사용자 모두 렌더링 되는 문제를 해결예정

		const {removePlayer, id, name, score, changeScore} = this.props;

		return (
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => removePlayer(id)}> x </button>
					{this.props.children}
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

// // 		const {removePlayer, id, name, score, changeScore} = this.props;
// Player.propTypes = {
// 	id: PropTypes.number,
// 	name: PropTypes.string,
// 	score: PropTypes.number,
// 	removePlayer: PropTypes.func,
// 	changeScore: PropTypes.func
// }


const mapActionToProps = (dispatch) => ({
	removePlayer: (id) => dispatch(removePlayer(id))

})

export default connect(null, mapActionToProps)(Player);



// export default Player;