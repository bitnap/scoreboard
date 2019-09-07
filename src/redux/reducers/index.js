import {combineReducers} from "redux";
import {playerReducer} from "./player";

export const allReducers = combineReducers({
	playerReducer
});



//  Q. 초기 state를 적으시오
// {
// 	playerReducer:{
// 		title: 'My Scoreboard'
// 	}
// }

// player.js 에서 return한 초기값을 당연히 반환함~