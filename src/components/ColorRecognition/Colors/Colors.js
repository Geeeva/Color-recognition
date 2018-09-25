import React, { Component } from 'react';
import './Colors.css';

class Colors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rightOffset: 30,
            topOffset: 18
        }
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