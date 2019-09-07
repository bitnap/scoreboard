import React from 'react';

export class AddPlayerForm extends React.Component {
	textInput = React.createRef();

	handleSubmit = (e) => {
		// submit의 기본 이벤트 막기 // <-- submit 버튼 클릭시 깜빡거림(refreshing) 예방
		e.preventDefault();
		// 아래는 31번째줄의 noValidate 때문에 추가됨
		const form = document.getElementById("form");
		const player = document.getElementById("player");

		// noValidate 했기 때문에 여기서 각각의 폼의 유효성 여부 체크
		console.log(player.validity.valid);
		console.log(form.checkValidity());

		// 3) 부모에게서 받은 콜백함수를 호출
		// document.getElementById("player"); === this.textInput.current.value
		// this.props.addPlayer(this.textInput.current.value);


	}

	render() {
		return (
			<form id="form" className="form" onSubmit={this.handleSubmit} noValidate>
				<input id="player" className="input" type="text" placeholder="enter a player's name"
				ref={this.textInput} required></input>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		)
	}
}