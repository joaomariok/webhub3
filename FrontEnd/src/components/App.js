import React, { Component } from 'react';
import axios from "axios"

import Header from "./Header/Header"
import Favorites from "./Favorites/Favorites"
import Footer from "./Footer/Footer"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }
  
  toggleEditMode = async () => {
    if (!this.state.isLoggedIn) {
      const pw = window.prompt("Enter password:", "");

      if (pw === null || pw === "") return;

      await axios.post("/login", {
        pass: pw
      })
      .then(res => {
        if (res.status !== 200) {
          throw Error(res.body.message)
          // return;
        };
      })
    }

    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }

  render() {
    return (
      <div className="App">
        <Header 
          loginCallback={this.toggleEditMode}
          isLoggedIn={this.state.isLoggedIn}
        />
        {<Favorites isLoggedIn={this.state.isLoggedIn}/>}
        <Footer />
      </div>
    );
  }
}

export default App;
