import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Main from './Main';
import About from './About';
import Topic from './Topic';
import Home from './Home';
import Info from './Info';
import NoMatch from './NoMatch'

export default class router extends Component {
  render() {
    return (
      <Router>
        <Home>
            <Switch>
              <Route path="/main" render={()=>{
                  return (
                      <Main>
                          <Route path="/main/:mainId" component={Info} ></Route>
                      </Main>
                  )
              }}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/topic" component={Topic}></Route>      
              <Route component={NoMatch}></Route>
            </Switch>
        </Home>
      </Router>
    )
  }
}
