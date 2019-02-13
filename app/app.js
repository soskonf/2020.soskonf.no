import 'react-app-polyfill/ie11';
import 'whatwg-fetch';
import 'es6-promise/auto';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store.js';
import Root from './root';

const container = document.querySelector('#app');

render(<Provider store={store}><Root></Root></Provider>, container);
