import React from 'react';
import Loding from '../../Component/Loding/Loding';
import './Home.scss';
import profileImage from '../../Assets/profileImage.png';
import { NavLink } from 'react-router-dom';
const Home = () => {
	return (
		<div style={{}}>
			<Loding firsttext="welcome" secondtext="Wait a bit" />
			<section className="Home">
				<div className="SomeImportant">
					<p className="name">Reaz Ahammed</p>
					<p className="HeaderX">
						Frontend developer
						<br /> and Frontend Engineer
					</p>
					<p className="text">
						Over the past 1 years, as a frontend Developer and Engineer, I have worked in many projects. I
						am also a competitive programmer. I have also perticipeted in many competitive programming
						contest.
					</p>
                    <div className="bottom">
                        <NavLink to="/about" className="abc" exact>Read about me</NavLink>
                        <a> or </a>
                        <NavLink to="/projects" className="abc" exact>View My projects</NavLink>

                    </div>
				</div>
			</section>
			<div className="ProfileImage">
				<img src={profileImage} alt="profileImage" />
			</div>
		</div>
	);
};

export default Home;
