import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="app-nav">
          <Link to="/favourites">Favourites</Link>
        </nav>
        <h1>Recipe finder</h1>
        <SearchRecipes />
        <RecipeList />
      </div>
    );
  }
}

export default App;
