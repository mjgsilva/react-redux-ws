import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

import { fetchData } from '../reducers/set_data';

// React Components
import Film from './Film';

// Styles and assets
import logo from '../styles/assets/logo.svg';
import '../styles/App.css';

const films = [
  { id: 1, username: 'hannes_becker', timestamp: Date.now(), photo: 'https://source.unsplash.com/category/nature', description: 'Wonders', hearts: 939, comments: [{ username: 'jamz', comment: 'awesome!' }]},
  { id: 2, username: 'james_wales', timestamp: Date.now(), photo: 'https://source.unsplash.com/category/food', hearts: 12, description: 'Enjoying the sights', comments: [{ username: 'karl', comment: 'awesome!' }]}
]

class App extends Component {

  constructor() {
    super();

    this.state = {
      photos: []
    }
  }


  componentDidMount() {
    this.fetchData();
  }


  setPhotos = (photos) => {
    this.setState({ photos });
  }


  handleRefresh = () => {
    this.fetchData();
  }

  renderGrid = () => {
    const { data } = this.props;
    const grid = data.length ? data : films;
    return grid.map((film) => {
      return <Film {...film} key={film.id} />
    });
  }


  fetchData = () => {
    const url = 'http://instagram-ws.herokuapp.com/films';

    this.props.dispatch(
      fetchData(url)
    );
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the future</h2>
          <h5 onClick={this.handleRefresh}>Refresh</h5>
        </div>
        {this.renderGrid()}
      </div>
    );
  }
}

export default connect(({ requestTimestamp, data }) => {
  return {
    requestTimestamp,
    data
  };
})(App);
