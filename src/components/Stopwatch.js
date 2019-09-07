import React from 'react';
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";
import styles from '../pages/Scoreboard.module.css';


export class Stopwatch extends React.Component {
	tickRef;
	state = {
		isRunning: false,
		timer: 0
	}

	handleStopwatch = () => {				// ({})json 객체임을 명시
		this.setState(prevState => ({isRunning: !prevState.isRunning}));

	}

	handleReset = () => {
		this.setState(prevState => ({timer:0}));
	}

	render() {
		return (
			<div className={styles.stopwatch}>
				<h2>StopWatch</h2>
				<span className={styles.stopwatchTime}>{this.state.timer}</span>
				<button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
				<button onClick={this.handleReset}>Reset</button>
				<button onClick={() => this.props.updateTitle('redux score')}>title change</button>
			</div>
		)
	}

	tick = () => {
		// time update logic
		if(this.state.isRunning) {					// ({})json 객체임을 명시
			this.setState(prevState => ({timer: prevState.timer +1}));
		}
	}

	// DOM이 렌더링 된 직후에 호출되는 라이프 사이클
	// 네트워크 호출
	componentDidMount() {
		this.tickRef = setInterval(this.tick, 1000);
	}

	// DOM이 파괴되기 직전에 호출되는 라이프 사이클
	// 리소스 해제 등등
	componentWillUnmount() {
		clearInterval(this.tickRef);
	}

}


const mapActionToProps = (dispatch) => ({
	updateTitle: (title) => dispatch(updateTitle(title))

})

// 위에서 mapping한 결과를 아래에서 connect 시켜줘야함
export default connect(null, mapActionToProps)(Stopwatch);
