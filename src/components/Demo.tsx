import React from 'react';


const Demo = (props: any) => {

	return (
		<React.Fragment>
			<h1>{props.title || 'untitled'}</h1>
			<p>Little demo</p>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/credits/">Credits</a></li>
			</ul>
		</React.Fragment>
	);
};

export default Demo;
