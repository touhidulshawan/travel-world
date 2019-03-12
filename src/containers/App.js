import React, { Component } from "react";
import Header from "../components/headers/Header";
import About from "../components/main/About";
// import Grid from "../components/grid/Grid";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Header />
        </header>
        <main>
          <About />
        </main>
        {/* <Grid /> */}
      </React.Fragment>
    );
  }
}

export default App;
