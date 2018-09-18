import React, { Component } from 'react';
import {TimelineLite} from "gsap/TweenMax";
import './Logo.css';

class Logo extends Component {

	constructor(){
        super();
        this.startPath = null;
        this.endPath = null;
        this.svgTween = null;
    }
    
    componentDidMount(){
    	let animation = new TimelineLite(), cloversNodes;
		cloversNodes = document.querySelectorAll('.clover');
		const clovers = Array.from(cloversNodes);
		const logo = document.getElementById('Logo-wrapper');

		animation.from(clovers[0], 0.5, {
			rotation: 180, transformOrigin:"bottom 50%", top: "20px"
		})

		.to(clovers[0], 0.5, {
			scale: 0.8, fill: "#A80F67"
		})

		.to(clovers[0], 0.5, {
			scale: 0.8, fill: "#787878"
		})


		.from(clovers[1], 0.5, {
			scale: 1, rotation: 180, transformOrigin:"left 50%", fill: "#CFD8DC"
		})
		.to(clovers[1], 0.5, {
			scale: 0.8, fill: "#DB81B5"
		})


		.from(clovers[2], 0.5, {
			scale: 1, rotation: 180, transformOrigin:"right 50%", fill: "#CFD8DC"
		})
		.to(clovers[2], 0.5, {
			scale: 0.8, fill: "#75448C"
		})


		.from(clovers[3], 0.5, {
			scale: 1, rotation: 180, transformOrigin:"top 50%", fill: "#CFD8DC"
		})
		.to(clovers[3], 0.5, {
			scale: 0.8, fill: "#75448C"
		})



		.to(clovers[0], 0.6, {
				y: -7, fill: "#bababa"
		}, "-=0.25")

		.to(clovers[1], 0.6, {
				x: 7, fill: "#DB81B5"
		}, "-=0.25")


		.to(clovers[2], 0.6, {
				x: -7, fill: "#571675"
		}, "-=0.25")

		.to(clovers[3], 0.6, {
				y: 7, fill: "#571675"
		}, "-=0.25")


		.to(logo, 3, {rotation: "+=360"});

}

	render() {
		return (
			<div id="Logo-wrapper">
			 	<svg id="Logo" version="1.1" viewBox="0 0 85.8 86">
				<path className="clover" id="Bottom" fill="#CFD8DC" d="M43.1,45.1c0,0,21.6,24.9,19.4,34c-0.8,8.8-37.6,9.5-39.2-0.3C21.8,69.2,43.1,45.1,43.1,45.1z"
					/>
				<path className="clover" id="Left" fill="#CFD8DC" d="M41.3,43.3c0,0-23.1,23.5-32.4,22C0.1,65.2-3.6,28.5,6,26.2S41.3,43.3,41.3,43.3z"/>
				<path className="clover" id="Right" fill="#CFD8DC" d="M44.9,43.2c0,0,23.3-23.2,32.6-21.7c8.8,0.2,12.1,36.9,2.4,39.1S44.9,43.2,44.9,43.2z"/>
				<path className="clover" id="Top" fill="#CFD8DC" d="M43,41.2c0,0-21.7-24.7-19.6-33.9c0.7-8.8,37.6-9.8,39.2,0C64.2,17.1,43,41.2,43,41.2z"/>
				</svg>
			</div>
		)
	}
}

export default Logo;