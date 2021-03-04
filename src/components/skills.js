import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaNodeJs, FaReact,  } from 'react-icons/fa';
import { DiMongodb, DiJavascript1,DiAws,DiDatabase,DiBootstrap } from 'react-icons/di';
function Skills() {
	return (
		<React.Fragment>
			<div className="col-12">
				<div className="container row skill-parent">
					<h5 className="col-12"> Coding Languages .... </h5>
					<ul className="col-12">
					<li>C-language</li>
						<li>Type Script</li>
						
					</ul>
				</div>
			</div>
			<div className="col-12">
				<div className="container row skill-parent">
					<h5 className="col-12">Front End .... </h5>
					<ul className="col-12">
						<li>
							{' '}
						 
							<li>	<AiFillHtml5 /> Html </li>
							<li><FaCss3Alt /> css</li>
							<li><DiBootstrap/>Bootstrap</li>
							<li><DiJavascript1 /> Javascript</li>
						</li>
				
						<li>
							{' '}
							<FaReact /> React
						</li>
					
					</ul>
				</div>
			</div>
			<div className="col-12">
				<div className="container row skill-parent">
					<h5 className="col-12">Back End ....</h5>
					<ul className="col-12">
						<li> Express </li>
						<li>
							{' '}
							<FaNodeJs /> Node JS
						</li>
					</ul>
				</div>
			</div>
			<div className="col-12">
				<div className="container row skill-parent">
					<h5 className="col-12"><DiDatabase/> Database .... </h5>
					<ul className="col-12">
						<li>
							{' '}
							<DiMongodb /> MongoDB{' '}
						</li>
					
					</ul>
				</div>
			</div>
			<div className="col-12">
				<div className="container row skill-parent">
					<h5 className="col-12">Serverless ....</h5>
					<ul className="col-12">
					
						<li>
							{' '}
							< DiAws/> Lambda Functions{' '}
						</li>
					</ul>
				</div>
			</div>
			<div className="col-12">
				<div className="container row skill-parent">
					<h5 className="col-12">API ....</h5>
					<ul className="col-12">
						<li> Rest - ( Express Js ) </li>
					
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Skills;
