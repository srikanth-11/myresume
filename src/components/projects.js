import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
function Project() {
	return (
		<div className="container parent-project">
			<ul className="row">
				
				<li className=" col-sm-12 col-lg-5  ">
					Questionsoverflow{' '}
					<a
						href="https://sri-questionsoverflow.netlify.app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
			
			
			
				
				<li className=" col-sm-12 col-lg-5  ">
					Uploader{' '}
					<a
						href="https://sri-uploader.netlify.app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				<li className=" col-sm-12 col-lg-5  ">
					socialize{' '}
					<a href="https://sri-socialize.netlify.app" target="_blank" rel="noopener noreferrer">
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				<li className=" col-sm-12 col-lg-5  ">
					Tasksubmission{' '}
					<a href="https://sri-tasksubmission.netlify.app" target="_blank" rel="noopener noreferrer">
						<FiExternalLink style={{ marginLeft: '1rem' }} size={'1.2rem'} />
					</a>{' '}
				</li>
				
				
				
			</ul>
		</div>
	);
}

export default Project;
