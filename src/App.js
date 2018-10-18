import React from 'react';
import { Route } from 'react-router-dom';

import './css/App.css';
import SearchForm from "./SearchForm";
import VideoListMini from "./VideoListMini";
import VideoSelectedMain from "./VideoSelectedMain";

function App(props) {
  return (
    <div className="App">
      <Route exact path="/" component={SearchForm} />
      <Route exact path="/" component={VideoListMini} />
      <Route path="/videos/:videoId" component={VideoSelectedMain} />
      <Route path="/videos/:videoId" component={VideoListMini} />
    </div>
  )
}
export default App;