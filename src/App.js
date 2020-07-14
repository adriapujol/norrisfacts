import React, { Component } from 'react';
import Category from './Category';
import Facts from './Facts';
import norris from './img/chuck_norris.png';
import logo from './img/chuck_norris_logo.png';


class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <img className="logo" src={logo} alt="Chuck Norris Facts" />
          <nav className="navbar">
            <Category />
          </nav>
        </header>
        <section>
          <img className="norris" id="norris" src={norris} alt="Norris"></img>
          <Facts />
          <div className="bg-letters">chuck norris facts</div>
        </section>
        <footer>by adrienhill</footer>
      </div>
    );
  }

}

export default App;
