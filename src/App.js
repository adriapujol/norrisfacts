import React, { Component } from 'react';
import Category from './Category';
import Facts from './Facts';
import norris from './img/chuck_norris.png';


class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h2 className="logo">Chuck Norris Facts</h2>
          <nav className="navbar">
            <Category />
          </nav>
        </header>
        <section>
          <img className="norris" id="norris" src={norris} alt="Norris"></img>
          <Facts />
        </section>
        <footer>by adrienhill</footer>
      </div>
    );
  }

}

export default App;
