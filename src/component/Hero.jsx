import {React, Component} from "react";
import logo from '../assets/hero_section_logo.svg'; 
import arrow_red from '../assets/arrow_red.svg'; 
import arrow_white from '../assets/arrow_white.svg'; 


class Hero extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div id="home" className="container-md container-sm mt-5">
                <div className="row hero-wrapper">
                    <div className="col-6 d-flex flex-column align-items-end justify-content-center row-gap-3">
                        <h1 className="w-75 text-white">
                            I’m a Full Stack 
                            <span className="text-red"> Software </span> and 
                            <span className="text-red"> Web </span>  
                            developer.
                        </h1>
                        <div className="buttons d-flex flex-column row-gap-3 w-75">
                            <a href="#project" className="rounded-2 border w-75 d-flex align-items-center justify-content-center p-2 text-decoration-none">
                                <span className="fs-5 text-red">Projects</span> 
                            </a>
                            <a href="#contact" className="rounded-2 bg-red w-75 d-flex align-items-center justify-content-center p-2 text-decoration-none">
                                <span className="fs-5 text-white">Contact</span> 
                            </a>
                        </div>
                    </div>
                    <div className="col-6  d-flex justify-content-center">
                        <img height="400" src={logo} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;