import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HeaderAdmin from "./components/paneladmin/headeradmin";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (
      localStorage.getItem("admin_view") == null ||
      localStorage.getItem("rol") === "user"
    ) {
      return (
        <div>
          <Header />
          {this.props.children}
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <HeaderAdmin />
          {this.props.children}
          <Footer />
        </div>
      );
    }
  }
}

export default App;
