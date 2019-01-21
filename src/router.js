import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import App from './App';
import Admin from './page/admin';
import Home from './page/home'
import NoMatch from './components/NoMatch'
import Buttons from './page/ui/buttons'
import Modals from './page/ui/modals'

import Login from './page/form/login'

export default class router extends Component {
  render() {
    return (       
      <Router>
        <App>
                <Route exact path="/" component={Admin}/>
                <Route path="/login" component={Login}/>
                <Route path="/admin" render={()=>
                    <Admin>
                        <Switch>
                            <Route  exact path="/admin" component={Home} />
                            <Route path="/admin/ui/buttons" component={Buttons} />
                            <Route path="/admin/ui/modals" component={Modals} />

                            <Route path="/admin/form/login" component={Login} />
                            <Route component={NoMatch}/>
                        </Switch>
                    </Admin>
                }/>
                <Route path="/order/detail" component={Login}/>
        </App>
      </Router>
    )
  }
}
