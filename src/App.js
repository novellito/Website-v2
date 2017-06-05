import React, { Component } from 'react';
import './css/index.css';
import AboutMe from './components/AboutMe';
import AboutsSection from './components/AboutsSection';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
       <AboutMe/>
       <AboutsSection/>
       <Experience/>
       <Skills/>
       <Projects/>
       <Contact/>
      </div>
    );
  }
}

export default App;
