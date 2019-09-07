import React from 'react';
import {Stats} from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from "prop-types";

// 펑션 컴포넌트는 반드시 대문자로 시작
// react element를 리턴해야 한다.
export const Header = ({title, players}) => {
	return (
		<header className="header">
			<Stats players={players} />
			<h1 className="h1">{title}</h1>
			<Stopwatch />
		</header>
	);
}


Header.propTypes = {
	title: PropTypes.string,
	players: PropTypes.arrayOf(PropTypes.object)
}

Header.defaultProps = {
	title: 'Scoreboard'		// title이 지정안됐다면 Scoreboard로 지정
}