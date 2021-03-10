import React from 'react';
import FavThing from './FavThing';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app__container">
        <h1>My Favorites!</h1>
        <div className="inputs__container">
          <FavThing thing="Movie" />
          <FavThing thing="Band" />
          <FavThing thing="Color" />
        </div>
      </div>
    );
  }
}

export default App;

