import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import Users from './containers/Users';
import User from './containers/User';
import CreateUsers from './containers/CreateUsers';
import Groups from './containers/Groups';
import Group from './containers/Group';
import CreateGroups from './containers/CreateGroups';
import NotFound from './components/NotFound';

import './styles.css'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div id='container'>
          <aside>
            <ul className='menu vertical-menu'>
              <li><Link to="/">Home</Link></li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/users/create">Create Users</Link>
              </li>
              <li>
                <Link to="/groups">Groups</Link>
              </li>
              <li>
                <Link to="/groups/create">Create Groups</Link>
              </li>
            </ul>
          </aside>
          <div id='content'>
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
                <Route
                  path='/groups/:name'
                  component={Group}
                />
               <Route path="*" component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
