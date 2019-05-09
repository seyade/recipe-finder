import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RecipeItem from './RecipeItem';

export class FavouriteRecipeList extends Component {
  render() {
    return this.props.favouriteRecipes.length > 0 ? (
      <div className="App">
        <nav className="app-nav">
          <Link to="/">Home</Link>
        </nav>
        <h4>Favourite recipes</h4>
        {this.props.favouriteRecipes.map((recipe, index) => (
          <RecipeItem key={index} recipe={recipe} favouriteButton={false} />
        ))}
      </div>
    ) : (
      <div className="App">
        <nav className="app-nav">
          <Link to="/">Home</Link>
        </nav>
        <h4>Please select at least 1 favourite recipe!</h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({ favouriteRecipes: state.favouriteRecipes });

export default connect(mapStateToProps)(FavouriteRecipeList);
