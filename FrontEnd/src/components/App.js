import React, { Component } from 'react';

import Header from "./Header/Header"
import Favorites from "./Favorites/Favorites"
import Footer from "./Footer/Footer"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  
  toggleEditMode = () => {
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
