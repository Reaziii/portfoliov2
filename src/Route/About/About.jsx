import React from 'react';
import AboutSlider from '../../Component/AboutSlider/AboutSlider';
import Loding from '../../Component/Loding/Loding';
import whatido from '../../Assets/whatisdo.svg';
import programming from '../../Assets/programming.svg'
import './About.scss';
import Experience from '../../Component/Experience/Experience';
const About = () => {
	return (
		<div className="about">
			<Loding firsttext="About me" secondtext="FrontEnd Developer" />
			<div className="Header">
				<p className="Afewword">A FEW WORDS ABOUT ME</p>
				<h1 className="boldtext">
					Hi, I am Reaz Ahammed, a FrontEnd web Developer. I am currently pursing my B.Sc in computer Science
					and Engineering from Institute of Science and Technology, Bangladesh.
				</h1>
				<p className="lowtext">
					Over the past 1 years, as a frontend Developer and Engineer, I have worked in many projects. I have
					a passion for problem-solving and like to solve challenges that help evolve analytical and
					programming skills. My profiles on various Competitive coding platforms are{' '}
					<a href="https://www.codechef.com/users/reaziii" target="_blank">
						codechef
					</a>{' '}
					<a href="https://codeforces.com/profile/ReCRuS" target="_blank">
						codeforces
					</a>{' '}
					<a href="https://hackerrank.com/reaziiii" target="_blank">
						hackerrank
					</a>
					.
				</p>
			</div>

			<div className="aboutService">
				<div className="services">
					<p>What I do</p>
					<h1>
						HTML <em>/</em>
						CSS | SASS <em>/</em>
						javascript <em>/</em>
						React Js <em>/</em>
						firebase

					</h1>
				</div>
				<div className="aboutserviceimg">
					<img src={whatido} />
				</div>
			</div>

            <div className="aboutService">
				
				<div className="aboutserviceimg">
					<img src={programming} />
				</div>
                <div className="services ex">
					<p>tools I use</p>
					<h1>
						vs code <em>/</em>
						sublime text 3 <em>/</em>
						chrome <em>/</em>
						mac big sur (os) <em>/</em>
						Sluck <em>/</em>
						discord 
					</h1>
				</div>
			</div>

			<Experience/>

            
		</div>
	);
};

export default About;
