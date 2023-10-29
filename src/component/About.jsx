import {React, Component} from "react";
import logo from '../assets/about_me_logo.svg'; 
import arrow_red from '../assets/arrow_red.svg'; 
import arrow_white from '../assets/arrow_white.svg'; 


class About extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div id="about" className="main-wrapper container-md container-sm mt-5">
                <div className="row about-wrapper">
                    <div className="col-6  d-flex justify-content-center">
                        <img height="400" src={logo} alt="" />
                    </div>
                    <div className="col-6 d-flex flex-column align-items-end justify-content-center row-gap-3">
                        <h1 className="w-75 text-white">
                            <span className="text-red fw-light w-75 fs-4">
                                Who am I ?
                            </span>
                            <br />
                            I do freelance web and software developer.
                        </h1>
                        <p className="text-white fw-light w-75 fs-5">
                            My skillets varies from different programming  languages to networking and cloud hosting. 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;