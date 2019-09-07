// 3) store.js 생성

import {allReducers} from "./index";
import {createStore} from "redux";

export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store);
// console.log('1st ->>>'+store.getState());
