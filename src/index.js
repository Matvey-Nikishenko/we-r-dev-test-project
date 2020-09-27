import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './reducer';
import './index.scss';
import App from './components/App';


const store = createStore(rootReducer);


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>  
  </Router>  
  ,
  document.getElementById('root')
);


