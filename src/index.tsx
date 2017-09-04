import '../src/scss/app.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './js/App';
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import rootReducer from './js/reducers';

declare var window:any;

const store = createStore(rootReducer, {}, typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}><Component/></Provider>, document.getElementById('root'))
}

render(App);