// 1)  src > redux > reducers  하위에 player.js 생성
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
	return state;
}