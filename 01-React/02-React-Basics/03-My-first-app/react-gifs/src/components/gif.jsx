import React, { Component } from 'react';

class Gif extends Component {
	render() {
		const src = "https://media3.giphy.com/media/{this.props.id}/giphy.gif?cid=ecf05e47c5ecb66e019a9ec87db0b33462734c0b432d7e3c&rid=giphy.gif&ct=g";
		return (
			<img src={src} alt="" className="gif"/>
		);
	}
}

export default Gif;