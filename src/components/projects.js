import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
function Project() {
	return (
		<div className="container parent-project">
			<ul className="row">
				
				<li className=" col-sm-12 col-lg-5  ">
					Url Shortener{' '}
					<a
						href="https://sri-url-shortner-12.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
			
			
			
				
				<li className=" col-sm-12 col-lg-5  ">
					Newyork Times{' '}
					<a
						href="https://srikanth-newyorktimes-news.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				<li className=" col-sm-12 col-lg-5  ">
					Web Cricket{' '}
					<a href="https://srikanth-simple-cricket-game.netlify.app/" target="_blank" rel="noopener noreferrer">
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				
				
				
			</ul>
		</div>
	);
}

export default Project;
