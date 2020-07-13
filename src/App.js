import React, { Component } from 'react';
import Category from './Category';
import norris from './img/chuck_norris_s.png';


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
          <img id="norris" src={norris} alt="Norris"></img>
        </section>
      </div>
    );
  }

}

export default App;
