// 1)  src > redux > reducers  하위에 player.js 생성
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "../actionTypes";

let maxId = 4;	// 점점 추가되야되는 변수이므로 const 가 아닌 let 으로 변수선언
const playerInitialState = {
	title: 'My Scoreboard',
	players: [
		{name: 'LDK', score: 0, id: 1},
		{name: 'HONG', score: 10, id: 2},
		{name: 'KIM', score: 20, id: 3},
		{name: 'PARK', score: 30, id: 4},
	]
}
										// state = 위에서 정의한 playerInitialState JSON 객체값으로 초기화
export const playerReducer = (state = playerInitialState, action) => { // state 와 action을 매개체로 받아서 새로운 값을  return
	switch (action.type) {
		case ADD_PLAYER:
			// 기존 players에 name을가진  player 객체 추가
			state.players.push({name: action.name, score: 0, id: ++maxId});
			return {
				...state,
				players: [
					...state.players
				]
			}

		case CHANGE_SCORE:
			state.players.forEach(player => {
				if (player.id === action.id) {
					player.score += action.delta;
				}
			})
			return {
				...state,
				players: [
					...state.players
				]
			}

		case REMOVE_PLAYER:
			const index = state.players.findIndex(player => player.id === action.id);
			// state.players.splice(index, 0, {name: aaa, score: 0, id: ++maxId});
			state.players.splice(index, 1);
			return {
				...state,
				players: [
					...state.players
				]
			}

		default:
			return state;
	}
	return state;
}