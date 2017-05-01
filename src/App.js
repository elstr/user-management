import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  BrowserHistory
} from 'react-router-dom'
import { Header } from './components'
import { SidebarContainer,
         UserContainer,
         GroupContainer
} from './containers'

const Permissons = () => (
  <div>
    <h2>Permissons</h2>
  </div>
)

const App = () => (
  <Router history={BrowserHistory}>
    <div>
      <Header title="Users Management System"/>
      <SidebarContainer />
      <hr/>
      <Route path="/users" header='Users Management' component={UserContainer}/>
      <Route path="/groups" header='Groups Management' component={GroupContainer}/>
      <Route path="/permissons" header='Permissons Management' component={Permissons}/>
    </div>
  </Router>
)
export default App
