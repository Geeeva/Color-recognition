import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    constructor() {
        super();

        this.state = {
            footerBgChange: false,
        }
    }
    render() {
    	return (
    		<div className="footer-wrapper">
                <div className="bg-wrapper">
                    <svg id="footer-bg" viewBox="0 0 1920 321">
                        <path fill="#9E9E9E" d="M-1,327h1925V46C1461-87.8,646,144-1,208V327z"/>
                        <clipPath id="bg-form">
                            <path fill="pink" style={{transition: "fill .3s ease-in-out"}} d="M-1,327h1925V46C1461-87.8,646,144-1,208V327z"/>
                        </clipPath>
                        <g clipPath="url(#bg-form)" d="M-1,327h1925V46C1461-87.8,646,144-1,208V327z">
                            <rect className={"footer-bg" + (this.state.footerBgChange === true ? " brightGrey" : " darkGrey" )} width="1930" height="769"/>
                        </g>
                    </svg>    
                    <svg id="footer-bg-xl" viewBox="0 147 600 146.8">
                        <path fill="#9E9E9E" style={{transition: "fill .3s ease-in-out"}} d="M-0.3,293.8h600.9V191.9c-144.6-48.5-399-10.7-600.9,12.5V293.8z"/>
                        <clipPath id="bg-form-xl">
                            <path fill={this.props.footerBgColor} style={{transition: "fill .3s ease-in-out"}} d="M-0.3,293.8h600.9V191.9c-144.6-48.5-399-10.7-600.9,12.5V293.8z"/>
                        </clipPath>
                        <g clipPath="url(#bg-form-xl)" height="100%" width="100%">
                            <rect className={"footer-bg" + (this.state.footerBgChange === true ? " brightGrey" : " darkGrey" )} width="1930" height="769"/>
                        </g>
                    </svg>

                    <svg id="footer-bg-md" viewBox="0 138.9 600 148">
                        <path fill="#9E9E9E" d="M-0.3,286.9h600.9V181.4c-144.6-50.2-399-11.1-600.9,13V286.9z"/>
                        <clipPath id="bg-form-md">
                            <path fill={this.props.footerBgColor} style={{transition: "fill .3s ease-in-out"}} d="M-0.3,286.9h600.9V181.4c-144.6-50.2-399-11.1-600.9,13V286.9z"/>
                        </clipPath>
                        <g clipPath="url(#bg-form-md)" height="100%" width="100%">
                            <rect className={"footer-bg" + (this.state.footerBgChange === true ? " brightGrey" : " darkGrey" )} width="1930" height="769"/>
                        </g>
                    </svg>

                    <svg id="footer-bg-sm" viewBox="0 148 600 286">
                        <path fill="#9E9E9E" d="M0,434h599V240.3C428,171,201.3,198.9,0,243V434z"/>
                        <clipPath id="bg-form-sm">    
                            <path fill={this.props.footerBgColor} style={{transition: "fill .3s ease-in-out"}} d="M0,434h599V240.3C428,171,201.3,198.9,0,243V434z"/>
                        </clipPath>
                        <g clipPath="url(#bg-form-sm)" height="100%" width="100%">
                            <rect className={"footer-bg" + (this.state.footerBgChange === true ? " brightGrey" : " darkGrey" )} width="1930" height="769"/>
                        </g>
                    </svg>

                    <svg id="footer-bg-xs" viewBox="0 42 600 347">
                        <path fill="#9E9E9E" d="M-0.5,389h600.9V107.5C441-2.4,202,50.6,0,114.6L-0.5,389z"/>
                        <clipPath id="bg-form-xs">
                            <path fill={this.props.footerBgColor} style={{transition: "fill .3s ease-in-out"}} d="M-0.5,389h600.9V107.5C441-2.4,202,50.6,0,114.6L-0.5,389z"/>
                        </clipPath>
                        <g clipPath="url(#bg-form-xs)" height="100%" width="100%">
                            <rect className={"footer-bg" + (this.state.footerBgChange === true ? " brightGrey" : " darkGrey" )} width="1930" height="769"/>
                        </g>
                    </svg>

                    <div className="social-footer">
                        <div className="social">
                            <div className="intro">You can follow me on my Social networks accounts:</div>
                            <figure>
                                <a href="https://github.com/Geeeva" target="_blank" rel="noopener noreferrer">
                                    <div className="frame">
                                       <svg id="github" viewBox="128 -13.5 340.5 339.5">
                                            <circle className="circle" fill="#CFD8DC" cx="300" cy="155" r="168.5"/>
                                            <circle className="circle-bg" fill="#CFD8DC" cx="300" cy="155" r="168.5"/>
                                            <path className="octocat" fill="#070000" d="M244.3,313.9c8.9,1,12.1-3.2,12.1-8.9c0-4.4,0-15.5,0-29.8C209.1,285.1,199,252,199,252
                                                c-7.7-19.9-18.8-25.4-18.8-25.4c-15.5-11.1,1-9.9,1-9.9c17.7,1,26.4,17.7,26.4,17.7c15.5,26.4,39.7,18.8,49.6,14.3
                                                c1-11.1,5.5-18.8,11.1-23.2c-37.5-4.4-77.2-18.8-77.2-84.9c0-18.8,6.6-34.3,17.7-46.4c-2.2-4.4-7.7-22,2.2-45.2
                                                c0,0,14.3-4.4,47.4,17.7c13.3-3.2,28.6-5.5,43-5.5c14.3,0,28.6,2.2,43,5.5C378,44.6,391.1,49,391.1,49c8.9,24.2,3.2,40.7,2.2,45.2
                                                c11.1,12.1,17.7,27.6,17.7,46.4c0,66.1-39.7,80.5-78.4,84.9c6.6,5.5,11.1,15.5,11.1,32c0,23.2,0,41.9,0,47.4c0,4.4,3.2,9.9,12.1,8.9
                                                C327.5,326,285.4,327.7,244.3,313.9z"/>
                                        </svg>
                                    </div>
                                </a>
                    
                                <svg id="slash" viewBox="0 0 27.1 52">
                                    <polygon fill="#000" points="0.3,52 3.5,52 27.1,-0.2 24,0 "/>
                                </svg>
                    
                                <a href="https://www.linkedin.com/in/ivana-gili%C4%87-04620850" target="_blank" rel="noopener noreferrer" >
                                    <div className="frame">
                                        <svg id="linkedin" viewBox="130.3 -19.7 339 339">
                                            <circle className="circle" fill="#CFD8DC" cx="300" cy="150" r="168.5"/>
                                            <circle className="circle-bg" fill="#CFD8DC"  cx="300" cy="150" r="168.5"/>
                                            <g>
                                                <path className="linkedin-sign" d="M241.2,244.5h-44.4V100.8h44.4C241.2,100.8,241.2,244.5,241.2,244.5z M218.6,82.5c-16.2,0-24-7.1-24-21.9
                                                    c0-6.3,2.1-11.3,7-15.4c5-5,10.5-7.1,17-7.1c16.2,0,24,7.8,24,21.9C242.6,74.7,234.8,82.5,218.6,82.5L218.6,82.5z M405.3,244.5
                                                    h-45.1v-80.4c0-21.1-7.1-31.6-21.9-31.6c-11.3,0-19,5.7-23.3,17.5c-1.3,2.1-2.1,5.7-2.1,11.3v83.3h-45v-97.9
                                                    c0-21.9,0-37.4-0.8-45.8h38.1l2.9,19c9.9-15.5,24.6-23.3,45.1-23.3c15.5,0,27.5,5.7,37.3,16.2c9.9,10.5,14.1,26.1,14.1,46.5v85.2
                                                    H405.3z"/>
                                            </g>
                                            </svg>
                                    </div>  
                                </a> 
                            </figure>
                            <div className="email">
                                <a href="mailto:ivana.gilich@gmail.com">or email me here</a>
                            </div>
                        </div>

                    </div>
                    <div id="petal-right-wrraper">
                        <svg id="petal-right" x="0px" y="0px" viewBox="-33.8 189.5 145.5 104.8" onClick={() => {
                                this.setState({footerBgChange : !this.state.footerBgChange});
                                this.props.footerBgChanged();
                                }}>
                            <clipPath id="cp-petal">
                                <path id="Right" fill="#E0E0E2" d="M2.9,247.4c0,0,62.1-61.8,86.7-57.5c23.5,0.5,32.1,98.2,6.4,104C70.3,299.7,2.9,247.4,2.9,247.4z
                                "/>
                            </clipPath>
                            {/*<g id="clip" clipPath="url(#cp-petal)" className="colortext">
                                <rect x="-33.8" y="189.2" fill="#A80F67" width="100%"  height="100%" className="anim-shape-petal"/>
                                <rect x="-33.8" y="189.2" fill="#75448C" width="80%"  height="100%" className="anim-shape-petal"/>
                                <rect x="-33.8" y="189.2" fill="#571675" width="60%"  height="100%" className="anim-shape-petal"/>
                                <rect x="-33.8" y="189.2" fill="#BABABA" width="40%"  height="100%" className="anim-shape-petal"/>
                                <rect x="-33.8" y="189.5" fill="#787878" width="20%"  height="100%" className="anim-shape-petal"/>
                                <rect x="-34" y="189.7" fill="#DB81B5" width="10%"  height="100%" className="anim-shape-petal"/>
                            </g>*/}
                            <g id="clip" clipPath="url(#cp-petal)" className="colortext">
                                <rect x="-33.8" y="189.2" fill={this.props.colors[0]} height="100%" className="anim-shape-petal"/>
                                <rect x="-33.8" y="189.2" fill={this.props.colors[1]} width="80%"  height="100%" className="anim-shape-petal"/>
                                <rect x="-33.8" y="189.2" fill={this.props.colors[2]} width="60%"  height="100%" className="anim-shape-petal"/>
                                <rect x="-33.8" y="189.2" fill={this.props.colors[3]} width="40%"  height="100%" className="anim-shape-petal"/>
                                <rect x="-33.8" y="189.5" fill={this.props.colors[4]} width="20%"  height="100%" className="anim-shape-petal"/>
                                <rect x="-34" y="189.7" fill={this.props.colors[5]} width="10%"  height="100%" className="anim-shape-petal"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        
	    )
    }
}

export default Footer;