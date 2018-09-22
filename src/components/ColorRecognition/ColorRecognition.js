import React from 'react';
import Colors from './Colors/Colors';
import './ColorRecognition.css';

const colorRecognition = (props) => {

	return (
		<div className={"colorRecAppreance-wrapper" + (props.colorRecApp === true || props.tooltipVisible === false ? " visible" : "")}>
			<div id="petal-flipped">
				<svg id="petal-pic" x="0px" y="0px" viewBox="144.9 0 312.1 300">
					<path id="left" fill="#E0E0E2" d="M455.4,165.7c0,0-177-176.3-247.5-164.3c-66.9,1.4-91.6,279.9-18.5,296.5
				S455.4,165.7,455.4,165.7z"/>
				</svg>
				<div className="colorRecAppreance">
					<div className={"Picture" + (props.colorRecApp === true ? " visible-scale" : "")}>
						<img 
							className={(props.colorRecApp === true ? "" : "")}
							id="inputimage" src={props.imageUrl} alt="" />
					</div>
					<ul className="colors-wrapper">
						<Colors 
		                    colorRecApp={props.colorRecApp}
		                    colors={props.colors} 
			                />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default colorRecognition;