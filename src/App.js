import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Home from './components/Home';
import Users from './containers/Users';
import User from './containers/User';
import CreateUsers from './containers/CreateUsers';
import Groups from './containers/Groups';
import CreateGroups from './containers/CreateGroups';
import NotFound from './components/NotFound';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/users">Users</Link>
              <ul>
                <li><Link to="/users/create">Create Users</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/groups">Groups</Link>
              <ul>
                <li><Link to="/groups/create">Create Groups</Link></li>
              </ul>
            </li>
          </ul>
          <hr />
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path='/users'
          component={Users}
        />
        <Route
          path='/users/create'
          component={CreateUsers}
        />
        <Route
          path='/users/:name'
          component={User}
        />
        <Route
          exact
          path='/groups'
          component={Groups}
        />
        <Route
          path='/groups/create'
          component={CreateGroups}
        />
       <Route path="*" component={NotFound}/>
      </Switch>
        </div>
      </Router>
    )
  }
}
