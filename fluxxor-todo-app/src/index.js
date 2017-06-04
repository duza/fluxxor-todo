import React from 'react';
import ReactDOM from 'react-dom';
import Fluxxor from 'fluxxor';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
 

var flux = new Fluxxor.Flux(stores, actions);

flux.setDispatchInterceptor(function(action, dispatch) {
  ReactDOM.unstable_batchedUpdates(function() {
    dispatch(action);
  });
});	

ReactDOM.render(<App flux={flux} />, document.getElementById('root'));
registerServiceWorker();
