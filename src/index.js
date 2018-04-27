import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import './style/index.css';
import PostsIndex from './components/posts_index';
import promise from 'redux-promise';
import PostsNew from './components/posts_new';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={PostsIndex}/>
        <Route path="/posts/new" component={PostsNew}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
