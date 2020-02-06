import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import page1 from './pages/page1';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/page1' component={page1} />

        <Route
          render={function() {
            return <h1>Whoops! Something did or didn't do a thing.</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
