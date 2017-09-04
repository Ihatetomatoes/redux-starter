import '../src/scss/app.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './js/App';
import {Provider} from 'react-redux';
import store from './js/stores/store'

const render = Component => {
  ReactDOM.render(
    <Provider store={store}><Component/></Provider>, document.getElementById('root'))
}

render(App);