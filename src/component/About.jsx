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
            <div className="container-md container-sm mt-5">
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
                        <div className="buttons d-flex flex-column row-gap-3 w-75">
                            <div className="rounded-2 bg-red w-75 d-flex align-items-center justify-content-center p-2">
                                <span className="fs-5 text-white">Download CV</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;