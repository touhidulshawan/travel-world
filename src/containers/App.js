import React, { Component } from "react";
import "../assets/css/App.min.css";
import Header from "../components/headers/Header";
import About from "../components/main/About";
import Features from "../components/main/Features";
import Tour from "../components/main/Tour";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Header />
        </header>
        <main>
          <About />
          <Features />
          <Tour />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
