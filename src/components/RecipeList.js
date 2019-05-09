import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipeItem from './RecipeItem';

export class RecipeList extends Component {
  render() {
    return (
      <div>
        {this.props.recipes.map((recipe, index) => (
          <RecipeItem key={index} recipe={recipe} favouriteButton={true} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(RecipeList);
