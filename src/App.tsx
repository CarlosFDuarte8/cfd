import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'lightbox2/dist/css/lightbox.min.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'lightbox2/dist/js/lightbox.min.js';

import Navtop from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Footer from './components/Footer';

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navtop />
      <Intro />
      <About />
      <Footer />
    </div>
    
  );
}
