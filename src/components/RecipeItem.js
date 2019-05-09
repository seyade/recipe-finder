import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favouriteRecipe } from '../actions';

export class RecipeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favourited: false,
    };
  }

  render() {
    let { recipe, favouriteButton } = this.props;

    return (
      <article className="recipe-item">
        <a className="recipe-item__link" href={recipe.href}>
          <img
            className="recipe-item__image"
            src={recipe.thumbnail}
            alt={recipe.title}
          />
        </a>
        <div className="recipe-item__description">
          {favouriteButton ? (
            this.state.favourited ? (
              <button className="recipe-item__fav-btn">&#9733;</button>
            ) : (
              <button
                className="recipe-item__fav-btn"
                onClick={() => this.favouriteRecipeHandler(recipe)}
              >
                &#9734;
              </button>
            )
          ) : null}
          <h4 className="recipe-item__title">{recipe.title}</h4>
          <p className="recipe-item__text">{recipe.ingredients}</p>
        </div>
      </article>
    );
  }

  favouriteRecipeHandler(recipe) {
    this.props.favouriteRecipe(recipe);
    this.setState({
      favourited: true,
    });
  }
}

export default connect(
  null,
  { favouriteRecipe }
)(RecipeItem);
