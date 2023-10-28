import {Component} from "react";

class Navbar extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <nav className="navbar sticky-top navbar-expand-lg ">
                <div className="container-fluid px-5">
                    <a className="navbar-brand" href="/"><h3 className="text-red fw-bold">SepH</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <   a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#project">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
        );
    }
}

export default Navbar;