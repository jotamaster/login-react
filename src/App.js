import React, { Component } from 'react';
import { Switch,BrowserRouter as Router,Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';


class App extends Component {
  state = {
    login : false,
    register : false
  }

  render() {
    const {login} = this.state;
    return (
      <Router>
      <div>
          {login ? ( <h1>estoy legeado</h1>) : (
               <Switch>
                   <Route path="/" exact render={ ()=> <Login onLogin={this.onLogin}   />  } /> 
                   <Route path="/register" component={Register}/> 
              </Switch>
              )
          }
           
           </div>
          </Router>
        )
  }
}

export default App;
