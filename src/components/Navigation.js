import React from 'react';
import '../App.scss';
import moment_logo from '../img/moment_logo.png';

function Navigation() {
	return (
		<div className='nav_container'>
			<nav>
				<div className='logo'>
					<img id='logo' src={moment_logo}></img>
				</div>
				<div className='nav_searchbar'>
					<input
						id='search_bar'
						type='text'
						placeholder='Search products and more'
					/>
				</div>
				<div className='nav_icons'>
					<ul>
						<li>Login</li>
						<span>|</span>
						<li>Cart</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navigation;
