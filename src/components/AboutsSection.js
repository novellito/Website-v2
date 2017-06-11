import React, {Component} from 'react';
import AboutsContent from './AboutsContent.js';

class AboutsSection extends Component {
  render() {
    return (
       <section id={"aboutsSection"}>
        <div className="container">
           <AboutsContent/>
        </div>
    </section>
      
    );
  }
}

export default AboutsSection;
