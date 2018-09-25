import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Logo from '../components/Logo/Logo';
import ColorRecognition from '../components/ColorRecognition/ColorRecognition';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Footer from '../components/Footer/Footer';
import './App.css';

const app = new Clarifai.App({
    apiKey: 'e396a86b60c34a468d8a854ac9c383a6'
});

class App extends Component {

    constructor() {
        super();

        this.state = {
            input: '',
            imageUrl: '',
            tooltipVisible: false,
            colorRecAppreance: false,
            colors: ['#A80F67', '#75448C', '#571675', '#BABABA', '#787878', '#DB81B5'],
            footerBgColor: '#BABABA',
            /*colorArray: ['#A80F67', '#75448C', '#571675', '#BABABA', '#787878', '#DB81B5'],*/
            //cCounter: 1
            petalRotation: false
        }
    }

    onInputChangeHandler = (event) => {
        this.setState({input: event.target.value});

        if(event.target.value === '') {
            this.setState({
                colorRecAppreance: false,
                tooltipVisible: false,
            })
        }
    }

    displayColors = (colors) => {
        const rawColorsData = colors.outputs[0].data.colors;
        const hexaColors = rawColorsData.map((color) => {
            return color.raw_hex;
       });

       this.setState({
            colors: hexaColors,
            tooltipVisible: false,
            colorRecAppreance: true,
            petalRotation: true
        });
    }

    onSubmitHandler = () => {
        if(this.state.input !== '') {
            this.setState({
                imageUrl: this.state.input,
                colorRecAppreance: false,
            });
        }

        app.models
        .predict(Clarifai.COLOR_MODEL, this.state.input)
        .then(response => this.displayColors(response))
        .catch(err => /*console.log(err)*/
            this.setState({
                tooltipVisible: true,


            })
        );

        this.setState({petalRotation: false});
    }

    footerBgHandler = () => {
        if(this.state.footerBgColor === "#BABABA") {
            this.setState({
               footerBgColor: "#787878"
            })
        } else {
            this.setState({
               footerBgColor: "#BABABA"
            })
        }
        /*if(this.state.cCounter < this.state.colors.length){
            this.setState({
               footerBgColor: this.state.colors[this.state.cCounter],
               cCounter: this.state.cCounter + 1
            });
            console.log(this.state.colors[this.state.cCounter]);
        } else {
            this.setState({
                cCounter: 1
            });
        }*/
    }

    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="container input-section">
                        <Logo rotation={this.state.petalRotation}/>
                        <ImageLinkForm 
                            changed={this.onInputChangeHandler}
                            submitted={this.onSubmitHandler}
                            colors={this.state.colors}
                            tooltipVisible={this.state.tooltipVisible}
                        />
                        
                    </div>
                    <div className={"container-hidden" + (this.state.colorRecAppreance === true ? " container-visible" : "")}>
                        <ColorRecognition 
                            colorRecApp={this.state.colorRecAppreance}
                            colors={this.state.colors}
                            box={this.state.box} 
                            imageUrl={this.state.imageUrl}
                        />
                    </div>
                </div>    
                <Footer
                    colors={this.state.colors}
                    footerBgColor={this.state.footerBgColor}
                    footerBgChanged={this.footerBgHandler} 
                />
            </div>
        );
    }
}

export default App;
