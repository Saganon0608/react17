import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import App from './App';
import Admin from './pages/admin';
import Home from './pages/home'
import NoMatch from './components/NoMatch'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'

import Login from './pages/form/login'
import Register from "./pages/form/register";

import BasicTable from "./pages/table/basicTable";

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
                            <Route path="/admin/form/register" component={Register} />


                            <Route path="/admin/table/basic" component={BasicTable} />
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
