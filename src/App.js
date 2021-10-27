import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
