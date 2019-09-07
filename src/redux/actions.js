// action creator
import {ADD_PLAYER} from "./actionTypes";

export const addPlayer = (name) => ({
	type: ADD_PLAYER,
	name: name
});