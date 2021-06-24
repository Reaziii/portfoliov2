import React, { useState } from 'react';
import logo from '../../Assets/Logo.svg';
import logotext from '../../Assets/Logotext.svg';
import logomeny from '../../Assets/LogoMenu.svg';
import logon from '../../Assets/LogoOn.svg';
import './Menu.scss';
import { NavLink } from 'react-router-dom';
const Menu = () => {
	const [menuon, setmenuon] = useState(false);
	return (
		<>
			<div className={`MenuBar ${menuon ? 'menuison' : ''}`}>
				<div className="TopBar">
					<><div className="logoTab">
						<img className="logo1" src={logo} />
						<img className="logo2" src={logotext} />
					</div></>
					<div className="menuclick" onClick={() => setmenuon(!menuon)}>
						<p style={{ color: false ? 'rgb(172, 172, 172)' : 'black' }}>menu</p>
						<div className={`menubars menusp${menuon ? ' menuOn' : ''}`}>
							<p className={`bars${menuon ? ' bar1' : ''}`}></p>
							<p className={`bars${menuon ? ' bar2' : ''}`}></p>
							<p className={`bars${menuon ? ' bar3' : ''}`}></p>
						</div>
					</div>
				</div>
			</div>
			<div className={`MenuBarX ${!menuon ? 'menuisclose' : ''}`}>
				<div className="TopBar">
					<div className="logoTab">
						<img className="logo1" src={logon} />
						<img className="logo2" src={logomeny} />
					</div>
					<div className="menuclick" onClick={() => setmenuon(!menuon)}>
						<p style={{ color: true ? 'rgb(172, 172, 172)' : 'black' }}>close</p>
						<div className={`menubars menusp${menuon ? ' menuOn' : ''}`}>
							<p className={`bars${menuon ? ' bar1' : ''}`}></p>
							<p className={`bars${menuon ? ' bar2' : ''}`}></p>
							<p className={`bars${menuon ? ' bar3' : ''}`}></p>
						</div>
					</div>
				</div>

				<div style={{ color: 'white' }} className={`menusItems${menuon ? ' open' : ' close'}`}>
					<div className="menuheader">Menu</div>
					<ul>
						<NavLink onClick={() => setmenuon(false)} to="/" exact activeClassName="activenav">
							<li className="item">
								<i></i>Home
							</li>
						</NavLink>
						<NavLink onClick={() => setmenuon(false)} to="/about" exact activeClassName="activenav">
							<li className="item">
								<i></i>About me
							</li>
						</NavLink>
						<NavLink onClick={() => setmenuon(false)} to="/skills" exact activeClassName="activenav">
							<li className="item">
								<i></i>Skills
							</li>
						</NavLink>
						<NavLink onClick={() => setmenuon(false)} to="/projects" exact activeClassName="activenav">
							<li className="item">
								<i></i>Projects
							</li>
						</NavLink>
						
						<NavLink onClick={() => setmenuon(false)} to="/contuct" exact activeClassName="activenav">
							<li className="item">
								<i></i>Contact me
							</li>
						</NavLink>
					</ul>
				</div>
			</div>
			<div style={{ height: '90px' }} />
		</>
	);
};

export default Menu;
