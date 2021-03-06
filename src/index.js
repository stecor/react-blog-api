import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import './style/index.css';
import PostsIndex from './components/posts_index';
import promise from 'redux-promise';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/posts/new"} component={PostsNew}/>
          <Route path={process.env.PUBLIC_URL + "/posts/:id"} component={PostsShow}/>
          <Route path={process.env.PUBLIC_URL + "/"}          component={PostsIndex}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
