// action creator
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, UPDATE_TITLE} from "./actionTypes";

export const addPlayer = (name) => ({
	type: ADD_PLAYER,
	name
});

export const changeScore = (id, delta) => ({
	type: CHANGE_SCORE,
	id,
	delta
});

export const removePlayer = (id) => ({
	type: REMOVE_PLAYER,
	id
});

export const updateTitle = (title) => ({
	type: UPDATE_TITLE,
	title
});