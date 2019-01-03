import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import App from './App';
import Login from './page/login';
import Admin from './page/admin';
import Home from './page/home'
import Buttons from './page/ui/buttons'
import NoMatch from './components/NoMatch'

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
                            <Route component={NoMatch}/>
                        </Switch>
                    </Admin>
                }/>
                <Route path="/order/detail" component={Login}/>
                <Route component={NoMatch}/>
        </App>
      </Router>
    )
  }
}
