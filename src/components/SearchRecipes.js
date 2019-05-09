import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap';

class SearchRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: '',
      dish: '',
    };
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>
          <FormControl
            type="text"
            placeholder="garlic, chicken..."
            onChange={event =>
              this.setState({ ingredients: event.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Dish</FormLabel>
          <FormControl
            type="text"
            placeholder="adobo..."
            onChange={event => this.setState({ dish: event.target.value })}
          />
        </FormGroup>
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }

  search() {
    const { ingredients, dish } = this.state;
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const url = `${cors}http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;

    fetch(url, { method: 'GET' })
      .then(response => {
        console.log('RESP!!!!', response);

        return response.json();
      })
      .then(json => this.props.setRecipes(json.results));
  }
}

export default connect(
  null,
  { setRecipes }
)(SearchRecipes);
