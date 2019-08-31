import React from 'react';

export class AddPlayerForm extends React.Component {
	state = {
		value: ''
	}

	handleValueChange = (e) => {
		this.setState({value: e.target.value});
	}

	handleSubmit = (e) => {
		// submit의 기본 이벤트 막기 // <-- submit 버튼 클릭시 깜빡거림(refreshing) 예방
		e.preventDefault();
		// 3) 부모에게서 받은 콜백함수를 호출
		this.props.addPlayer(this.state.value);
	}

	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<input className="input" type="text" placeholder="enter a player's name"
				value={this.state.value} onChange={this.handleValueChange}></input>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		)
	}
}