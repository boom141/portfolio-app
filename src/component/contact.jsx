import {React, Component} from "react";
import contact_img from '../assets/contact_img.svg'; 
 


class Contact extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div id="contact" className="main-wrapper container-md container-sm mt-5">
                <div className="row contact-wrapper">
                    <div className="col-6 d-flex flex-column align-items-end  row-gap-3">
                        <h1 className="w-75 text-white">
                            <span className="text-red fw-light w-75 fs-4">
                                Contacts
                            </span>
                            <br />
                            Interested ? let's talk
                        </h1>
                        <div className="w-75 d-flex align-items-center column-gap-5">
                            <img  height="50" src="https://img.icons8.com/ios/100/E52727/phone--v1.png" alt="phone--v1"/>
                            <span className="fs-4 text-white">+639511191267</span> 
                        </div>
                        <div className="w-75 d-flex align-items-center column-gap-5">
                            <img  height="50" src="https://img.icons8.com/ios/100/E52727/new-post--v1.png" alt="phone--v1"/>
                            <span className="fs-4 text-white">josephnaval47@gmail.com</span> 
                        </div>
                        <div className="w-75 d-flex align-items-center column-gap-5">
                            <img  height="50" src="https://img.icons8.com/ios/100/E52727/marker--v1.png" alt="phone--v1"/>
                            <span className="fs-4 text-white">Manila, Metro Manila</span> 
                        </div>
                    </div>
                    <div className="col-6  d-flex justify-content-center">
                        <img height="400" src={contact_img} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;