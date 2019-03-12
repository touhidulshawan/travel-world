import React, { Component } from "react";
import Header from "../components/headers/Header";
import About from "../components/main/About";
import Features from "../components/main/Features";
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
        </main>
        {/* <Grid /> */}
      </React.Fragment>
    );
  }
}

export default App;
