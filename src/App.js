import React, { Component } from 'react';

import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
         <Home />
         <Projects />
        {/* // <Main />
        // <Projects />
        // <Resume />
        // <Contact />
        // <SocialLinks />
        // <Footer />  */}
      </div>
    );
  }
}

export default App;
