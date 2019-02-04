import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';
import BasicExample from './BasicExample';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
