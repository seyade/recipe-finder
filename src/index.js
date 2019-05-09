import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import FavouriteRecipeList from './components/FavouriteRecipeList';
import './styles/index.css';

// redux stuff
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(() => console.log('RECETTES!!!', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/favourites" component={FavouriteRecipeList} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
