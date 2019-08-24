import React from 'react';

export const Stats = (props) => {
	// todo: 로직구현
	const totalPlayers = 0; // props.players 로 로직구현;
	const totalScore = 0; // props.players 로 로직구현//
	return (
		<table className="stats">
			<tbody>
			<tr>
				<td>Players</td>
				<td>{totalPlayers}</td>
			</tr>
			<tr>
				<td>Total Points:</td>
				<td>{totalPlayers}</td>
			</tr>
			</tbody>
		</table>
	);
}