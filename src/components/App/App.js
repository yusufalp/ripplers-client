import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from '../streams/StreamCreate';
import StreamDelete from '../streams/StreamDelete';
import StreamEdit from '../streams/StreamEdit';
import StreamList from '../streams/StreamList';
import StreamShow from '../streams/StreamShow';
import Header from '../header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={StreamList} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/show" component={StreamShow} />
      </BrowserRouter>
    </div>
  );
}

export default App;
