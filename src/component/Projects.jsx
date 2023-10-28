import {React, Component} from "react";
import logo from '../assets/hero_section_logo.svg'; 
import arrow_red from '../assets/arrow_red.svg'; 
import arrow_white from '../assets/arrow_white.svg'; 
import { UncontrolledCarousel } from "reactstrap";


class Projects extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div id="project" className="container-md container-sm mt-5">
                <div className="row project-wrapper">
                    <div className="col-12 d-flex flex-column align-items-start justify-content-center">
                        <h1 className="text-red w-100 py-3 mb-5">Web Applications</h1>
                        <UncontrolledCarousel
                            items={[
                                {
                                key: 1,
                                src: 'https://drive.google.com/uc?export=view&id=16EvbAgtyG_IP9kXCd0LNz8s8LVoBx0oY'
                                },
                                {
                                key: 2,
                                src: 'https://drive.google.com/uc?export=view&id=10oH5a2PmjHMmmHOFn9r8YAiCo7LXOlDr'
                                },
                                {
                                key: 3,
                                src: 'https://drive.google.com/uc?export=view&id=1uLTwCpEAvaa2Kv3qKOiP8ZxYFfx0gyz-'
                                },
                                {
                                key: 4,
                                src: 'https://drive.google.com/uc?export=view&id=1VBcXuj2ugTKfwtq0O_BJWmP9WVzEkC4Q'
                                },
                                {
                                key: 5,
                                src: 'https://drive.google.com/uc?export=view&id=1Mu7uYJ52mW4VSZY3TJ4_6ua1R_m-fPGt'
                                },
                                {
                                key: 6,
                                src: 'https://drive.google.com/uc?export=view&id=1f7Iu9TLh171EEznWC-vGQSgPkplv_jZI'
                                },
                                {
                                key: 7,
                                src: 'https://drive.google.com/uc?export=view&id=1GE-jL64pAxG11R0P6e_zektUYjU1ccOS'
                                },
                            ]}
                        />
                    </div>
                    <div className="col-12 d-flex flex-column align-items-center justify-content-center mt-5">
                        <h1 className="text-red w-100 py-3 mb-5">Software/Game Development</h1>
                        <div className="d-flex flex-wrap column-gap-3 row-gap-3">
                            <video width={300} height={300} loop autoplay="true" muted="true" src="https://drive.google.com/uc?export=view&id=1EgUi6n7PX3PGlmRm1WkHpNzuH-QT6xLG "></video>
                            <video width={300} height={300} loop autoplay="true" muted="true" src="https://drive.google.com/uc?export=view&id=1GVQnJrzSf0l2GO6CDCkFyIVn-a-verr9 "></video>
                            <video width={300} height={300} loop autoplay="true" muted="true" src="https://drive.google.com/uc?export=view&id=1ATIAP4L7_DnJWYBgoxyZt1KdIJqBt7DH "></video>
                            <video width={300} height={300} loop autoplay="true" muted="true" src="https://drive.google.com/uc?export=view&id=1ZsF8u1uX_ILCrhnN069PrrrBlGR30qOw "></video>
                            <video width={300} height={300} loop autoplay="true" muted="true" src="https://drive.google.com/uc?export=view&id=132HzwM3bgV33E1PHcwmgpFYuIjLf-49j "></video>
                            <video width={300} height={300} loop autoplay="true" muted="true" src="https://drive.google.com/uc?export=view&id=1jk-WIFQFDr5wUiBcu0RooZn3gyW-BN4C "></video>
                            <video width={300} height={300} loop autoplay="true" muted="true" src="https://drive.google.com/uc?export=view&id=1pWeydVynLuT4D6_UW9pCyZx-Ub1r4g_A "></video>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;