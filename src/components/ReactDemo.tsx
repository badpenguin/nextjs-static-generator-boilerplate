import React, {Component} from 'react';

import './ReactDemo.scss';

export default class ReactDemo extends Component {

	state = {
		date: new Date(),
	};

	mounted: boolean = false;

	componentDidMount() {

		this.mounted = true;

		console.log('componentDidMount only gets called on client side');
		setInterval(
			() => this.setState({date: new Date()}),
			1000
		);
	}

	render() {
		console.log('rendering...', this.mounted);

		// Dirty way to simulate "dynamic" loading
		if (!this.mounted) {
			return (
				<div id="clock" className="clock react-loader">loading...</div>
			);
		}

		return (
			<div id="clock" className="clock">{this.state.date.toISOString()}</div>
		);
	}

};
