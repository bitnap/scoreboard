import React from 'react';

import styles from '../pages/Scoreboard.module.css';


export const Stats = ({players}) => {
	const totalPlayers = players.length; // props.players 로 로직구현;
	let totalScore = 0; // props.players 로 로직구현//
	players.forEach(player => totalScore += player.score);

	return (
		<table className={styles.stats}>
			<tbody>
			<tr>
				<td>Players</td>
				<td>{totalPlayers}</td>
			</tr>
			<tr>
				<td>Total Points:</td>
				<td>{totalScore}</td>
			</tr>
			</tbody>
		</table>
	);
}