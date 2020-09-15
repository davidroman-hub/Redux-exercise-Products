import React from 'react';
import Header from './components/Header';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Products from './components/Products';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';

// Redux
import {Provider} from 'react-redux';
import store from '../src/components/Store'


function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
        <div className='container mt-5'>
          <Switch>
            <Route exact path='/' component={Products}/>
            <Route exact path='/products/news' component={NewProduct}/>\
            <Route exact path='/products/edit/:id' component={EditProduct}/>
          </Switch>
        </div>
        </Provider>
    </Router>
  );
}

export default App;
