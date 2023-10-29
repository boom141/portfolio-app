import React,{Component} from "react";
import logo from '../assets/hero_section_logo.svg'; 
import arrow_red from '../assets/arrow_red.svg'; 
import arrow_white from '../assets/arrow_white.svg'; 


class Footer extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="mt-5 container-md container-sm mt-5">
                <div className="row footer-wrapper">
                    <hr color="white" width="100%"/>
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <h3 className="text-red">SepH</h3>
                        <h4 className="text-white fw-light">2023 - SepH, All right’s reserved</h4>
                        <div className="socmed-links d-flex">
                            <a href="https://www.facebook.com/rainbow.after.heavy.rain">
                                <img width="50" height="50" src="https://img.icons8.com/ios/50/E52727/facebook-new.png" alt="facebook-new"/>   
                            </a>
                            <a href="https://www.instagram.com/nijidev00/?hl=en">
                                <img width="50" height="50" src="https://img.icons8.com/ios/50/E52727/instagram-new--v1.png" alt="instagram-new--v1"/>
                            </a>
                            <a href="">
                                <img width="50" height="50" src="https://img.icons8.com/ios/50/E52727/twitterx--v1.png" alt="twitterx--v1"/>
                            </a>
                            <a href="https://www.linkedin.com/in/joseph-roi-naval-b89a70205/">
                                <img width="50" height="50" src="https://img.icons8.com/ios/50/E52727/linkedin.png" alt="linkedin"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;