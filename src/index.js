import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}


// var count = 50;
// var API_KEY = "YOUR KEY";
// var q = RandomString(3);
// var url = "https://www.googleapis.com/youtube/v3/search?key=" + API_KEY + "&maxResults="+count+"&part=snippet&type=video&q=" +q;