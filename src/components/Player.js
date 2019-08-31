import React from "react";
import { Counter } from './Counter';

export class Player extends React.PureComponent {
	render() {


		console.log(this.props.name, ' rendered');	// 사용자 한명만 컨트롤해도 사용자 모두 렌더링 되는 문제를 해결예정

		return (
			<div className="player">
		<span className="player-name">
			<button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}> x </button>
			{this.props.name}
		</span>
				<Counter score={this.props.score}
								 id={this.props.id}
								 changeScore={this.props.changeScore}
				/>
			</div>
		)
	}
}