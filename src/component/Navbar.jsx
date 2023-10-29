import React, {useState,useEffect,useRef} from "react";

const Navbar = () => {
    const [active_link,set_active_link] =useState(false);
    const nav_links = [
        {
            id: 'home',
            ref: useRef(null),
        },
        {
            id: 'about',
            ref: useRef(null),
        },
        {
            id: 'project',
            ref: useRef(null),
        },
        {
            id: 'contact',
            ref: useRef(null),
        }
    ];

    useEffect(() =>{
        
        const observer = new IntersectionObserver(entries =>{

            const [current_elem] = entries;
            if(current_elem.isIntersecting){
                set_active_link(current_elem.isIntersecting)
                nav_links.forEach(obj => { 
                    if(obj.id == current_elem.target.id){
                        obj.ref.current.classList.add('active-nav')
                    }else{
                        obj.ref.current.classList.remove('active-nav')
                    }
                })
            }

        },{root: null, rootMargin: "0px", threshold: 0.3})

        const wrapper_elems = document.querySelectorAll('.main-wrapper')
        wrapper_elems.forEach(elem=>{ observer.observe(elem) })

        return () =>{
            wrapper_elems.forEach(elem=>{ observer.unobserve(elem) })
        }

    },[nav_links])

    return (
        <nav className="navbar sticky-top navbar-expand-lg ">
                <div className="container-fluid px-5">
                    <a className="navbar-brand" href="/"><h3 className="text-red fw-bold">SepH</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" ref={nav_links[0].ref} href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <   a className="nav-link text-white"  ref={nav_links[1].ref} href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" ref={nav_links[2].ref} href="#project">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" ref={nav_links[3].ref} href="#contact">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
  )
}

export default Navbar

