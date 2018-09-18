import React, { Component } from 'react';
import {TimelineMax} from "gsap/TweenMax";
import {Elastic} from "gsap/all";
import './Colors.css';

class Colors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rightOffset: 30,
            topOffset: 18
        }
    }

    componentDidMount(){
    	let animation = new TimelineMax(), colorsNodes;
		colorsNodes = document.querySelectorAll('.color');
		const colors = Array.from(colorsNodes);
		animation.staggerFrom(colors, 2, {
			scale: 0.7, ease: Elastic.easeOut}, 0.15);
	}	

	render(){
		if(!this.props.colors.length){
            return null;
		}

		return this.props.colors.map((color, index) => {
			let accTopOffset = this.state.topOffset * index;
			let accRightOffset = this.state.rightOffset * index;


			return(
				<li 
					className={"color" + (this.props.colorRecApp === true ? "" : "")}
					style={{
						top: accTopOffset,
						right: accRightOffset, 
						backgroundColor: color}}
					key={index}
				>
					<span>{color}</span>
				</li>
			)
		}); 
	}	
}

export default Colors;