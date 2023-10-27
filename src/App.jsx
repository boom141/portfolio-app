import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/app.css';

import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/contact";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
