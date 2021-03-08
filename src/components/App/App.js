import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from '../streams/StreamCreate';
import StreamDelete from '../streams/StreamDelete';
import StreamEdit from '../streams/StreamEdit';
import StreamList from '../streams/StreamList';
import StreamShow from '../streams/StreamShow';
import Header from '../header/Header';
import history from '../../history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={StreamList} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/show/:id" component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
