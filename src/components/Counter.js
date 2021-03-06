import React from "react";
import PropTypes from "prop-types";
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";

import styles from '../pages/Scoreboard.module.css';
import classNames from 'classnames';

class Counter extends React.Component {
	constructor() {
		super();
		// this.handleChangeScore = this.handleChangeScore.bind(this);
	}
/*
	handleChangeScore(delta) {
		console.log('incrementScore', this);
		// state를 변경하는 방법은 setState() 밖에 없다.
		// this.state.score += 1;
		this.setState(prevState => ({score: prevState.score + delta}));
	}
*/
	// 이벤트의 오른쪽은 함수 선언문이 들어가야 한다.
	render() {
		return (
			<div className={styles.counter}>
				<button className={classNames(styles.counterAction, styles.decrement)}
								onClick={() => this.props.changeScore(this.props.id, -1)}> - </button>
				<span className={styles.counterScore}>{this.props.score}</span>
				<button className={classNames(styles.counterAction, styles.increment)} onClick={() => this.props.changeScore(this.props.id, 1)}> + </button>
			</div>
		)
	}
}

Counter.propTypes = {
	score: PropTypes.number,
	id: PropTypes.number,
	changeScore: PropTypes.func
}



const mapActionToProps = (dispatch) => ({
	changeScore: (id, delta) => dispatch(changeScore(id, delta))
})

export default connect(null, mapActionToProps)(Counter);


// export default Counter;