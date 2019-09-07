import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./Heroes";
import {Scoreboard} from "./Scoreboard";

// nested routing

export class Root extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<p>공통메뉴</p>
				<switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/heroes" component={Heroes}></Route>
					<Route path="/scoreboard" component={Scoreboard}></Route>
				</switch>
			</BrowserRouter>
		)
	}
}