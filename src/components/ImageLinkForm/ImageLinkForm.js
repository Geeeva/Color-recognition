import React from 'react';
import './ImageLinkForm.css';

const imageLinkForm = (props) => {
	return (
		<div className="ImageLinkForm">
			<h1>
				{/*"Smart Color Recognition"*/}
				<svg viewBox="0 0 1920 300">

                    <clipPath id="cp-text">
                        <text id="text" textAnchor="middle" x="50%" y="50%" dy=".35em">
                             SMART COLOR RECOGNITION
                        </text>
                    </clipPath>

                    <g clipPath="url(#cp-text)" className="colortext">
                        <rect width="100%" height="100%" className="anim-shape"></rect>
                        <rect width="80%" height="100%" className="anim-shape"></rect>
                        <rect width="60%" height="100%" className="anim-shape"></rect>
                        <rect width="40%" height="100%" className="anim-shape"></rect>
                        <rect width="20%" height="100%" className="anim-shape"></rect>
                        <rect width="10%" height="100%" className="anim-shape"></rect>
                    </g>
                </svg>
			</h1>
			<h3>
				{"First upload the image, then hit detect, and it will show you the dominant colors of uploaded pic"}
			</h3>
			<div className="Notification">
				<span 
					className={"tooltiptext" + (props.tooltipVisible === true ?
				 	' visible' : '')}>
				</span>
			</div>
			<div className="center">
				<input className="" placeholder="Enter the URL" type="text" onChange={props.changed}/>
				<button
					className="detect"
					onClick={props.submitted}> 
					{"DETECT"}
				</button>
			</div>
		</div>
	)
}

export default imageLinkForm;