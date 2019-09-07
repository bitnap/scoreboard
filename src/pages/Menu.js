// import React from 'react'
//
// export class Menu extends React.Component {
// 	render() {
// 		return ( // https://getbootstrap.com/docs/4.3/components/navbar/#nav
// 			<nav className="navbar navbar-expand-lg navbar-light bg-light">
// 				<a className="navbar-brand" href="#">Navbar</a>
// 				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
// 								aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// 					<span className="navbar-toggler-icon"></span>
// 				</button>
// 				<div className="collapse navbar-collapse" id="navbarNav">
// 					<ul className="navbar-nav">
// 						<li className="nav-item active">
// 							<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
// 						</li>
// 						<li className="nav-item">
// 							<a className="nav-link" href="#">Features</a>
// 						</li>
// 						<li className="nav-item">
// 							<a className="nav-link" href="#">Pricing</a>
// 						</li>
// 						<li className="nav-item">
// 							<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
// 						</li>
// 					</ul>
// 				</div>
// 			</nav>
// 		)
// 	}
// }



////////////////////////////////////////////////////////////////////////
// 이하 reactstrap


import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';

export class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/">reactstrap</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/components/">Components</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Option 1
									</DropdownItem>
									<DropdownItem>
										Option 2
									</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>
										Reset
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}