// 1)  src > redux > reducers  하위에 player.js 생성
const playerInitialState = {
	title: 'My Scoreboard'
}
										// state = 위에서 정의한 playerInitialState JSON 객체값으로 초기화
const playerReducer = (state = playerInitialState, action) => { // state 와 action을 매개체로 받아서 새로운 값을  return
	return state;
}