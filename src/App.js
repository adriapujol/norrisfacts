import React, { Component } from 'react';
import Category from './Category';
import Facts from './Facts';
import norris from './img/chuck_norris.png';
import logo from './img/chuck_norris_logo.png';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      category: "animal",
      fact: "Chuck Norris threw a grenade and killed 50 people, then it exploded.",
    }
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(res => res.json())
      .then(json => {
        this.setState({
          categories: json,
        })
      });
  };

  
  handleCategory = (e) => {
    this.setState({
      category: e.target.value,
    })
  }
  
  onSubmitCategory = () => {

    fetch(`https://api.chucknorris.io/jokes/random?category=${this.state.category}`)
      .then(res => res.json())
      .then(fact => {
        this.setState({
          fact: fact.value,
        })
      });
    console.log("hi");
  }

  render() {

    const { categories, fact } = this.state;

    return (
      <div className="container">
        <header>
          <img className="logo" src={logo} alt="Chuck Norris Facts" />
          <nav className="navbar">
            <Category categories={categories} onSubmitCategory={this.onSubmitCategory} handleCategory={this.handleCategory} />
          </nav>
        </header>
        <section>
          <img className="norris" id="norris" src={norris} alt="Norris"></img>
          <Facts fact={fact} />
          <div className="bg-letters">chuck<br />norris<br />facts</div>
        </section>
        <footer>by adrienhill</footer>
      </div>
    );
  }

}

export default App;
