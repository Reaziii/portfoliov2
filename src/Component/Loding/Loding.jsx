import React, { useState } from 'react';
import logo from '../../Assets/LogoOn.svg';
import logoMenu from '../../Assets/LogoMenu.svg';
import './Loding.scss';
const Loding = ({ firsttext, secondtext, image }) => {
	const [lodingon, setlodingon] = useState(false);
	setTimeout(() => {
		setlodingon(true);
	}, 2000);
	return (
		<div className={`loding${lodingon ? ' on' : ''}`}>
			<div className="logoTab">
				<img className="logo1" src={logo} />
				<img className="logo2" src={logoMenu} />
			</div>


			{lodingon===false?<div className="lodingEffect"></div>:null}

			<div className="parent">
				<div className={`lowertexts${lodingon ? ' open' : ''}`}>
					<p className="first">{firsttext}</p>
					<p className="second">{secondtext}</p>
				</div>
			</div>
		</div>
	);
};

export default Loding;
