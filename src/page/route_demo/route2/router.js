import React, { Component } from 'react'
import {HashRouter,Route} from 'react-router-dom';
import Main from './Main';
import About from './About';
import Topic from './Topic';
import Home from './Home';

export default class router extends Component {
  render() {
    return (
      <HashRouter>
        <Home>
            <Route path="/main" render={()=>{
                return (
                    <Main>
                        <Route path="/main/a" component={About} ></Route>
                    </Main>
                )
            }}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topic" component={Topic}></Route>      
        </Home>
      </HashRouter>
    )
  }
}
