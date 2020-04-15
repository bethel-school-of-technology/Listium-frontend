import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from '../src/styles/theme'
import { WavesPattern, LinesPattern } from '../src/components/branding/index';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Error from './pages/Error';
import Header from './components/Header';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Header />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/login" component={Login}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/profile" component={Profile}/>
            {/* <Route component={Error}/> */}
           </Switch>
           <LinesPattern />
           <WavesPattern />
        </div> 
      </BrowserRouter>
    );
  }
}



export default App;
