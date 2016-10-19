import React, { Component } from 'react';

import Film from './Film';

import logo from './logo.svg';
import './App.css';

const films = [
  { id: 1, username: 'hannes_becker', timestamp: Date.now(), photo: 'https://source.unsplash.com/random', hearts: 939, comments: [{ username: 'jamz', comment: 'awesome!' }]},
  { id: 2, username: 'james_wales', timestamp: Date.now(), photo: 'https://source.unsplash.com/random', hearts: 12, comments: [{ username: 'karl', comment: 'awesome!' }]}
]

class App extends Component {

  renderGrid = () => {
    return films.map((film) => {
      return <Film {...film} key={film.id} />
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {this.renderGrid()}
      </div>
    );
  }
}

export default App;
