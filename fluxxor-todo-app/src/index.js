import React from 'react';
import ReactDOM from 'react-dom';
import Fluxxor from 'fluxxor';
import { stores } from './stores';
import { actions } from './actions';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
 

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

flux.setDispatchInterceptor(function(action, dispatch) {
  ReactDOM.unstable_batchedUpdates(function() {
    dispatch(action);
  });
});	

ReactDOM.render(<App flux={flux} />, document.getElementById('root'));
registerServiceWorker();
