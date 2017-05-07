import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import {Main} from './views';
import {UsersContainer} from './containers';
import Groups from './views/Groups';
import NotFound from './views/NotFound';

class App extends Component {
  constructor() {
    super();
    this.state = {
        users: [{id:1, name:'Lele', isActive:true},
                {id:2, name:'Emi', isActive:true},
                {id:3, name:'Ferlu', isActive:true},
                {id:4, name:'Bel', isActive:true}],
        groups: [{
                  id:1,
                  name: 'Admins',
                  users:[1,2],
                  isActive:true
                },{
                  id:2,
                  name: 'Devs',
                  users:[],
                  isActive:true
                }],
          configuration: {showUsers: false}
        }
  }

  generateId = () => Math.floor(Math.random()*1000)

  getState = (stateKey = '') => {
    const isStateKey = this.state.hasOwnProperty(stateKey);
    if (isStateKey) {
      return this.state[stateKey];
    } else {
      return this.state;
    }
  };

  updateState = (cb = () => {}) => {
    this.setState(cb);
  };

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/groups">Groups</Link></li>
          </ul>

          <hr />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main />
          )}
        />
        <Route
          path='/users'
          header='Users'
          component={UsersContainer}
          users={this.state.users}
        />
        <Route
          path="/groups"
          render={() => (
            <Groups
              getState={this.getState}
              updateState={this.updateState}
              generateId={this.generateId}
            />
          )}
        />
       <Route path="*" component={NotFound}/>
      </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
