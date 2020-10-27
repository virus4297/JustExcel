import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Signup from './components/SignUpPage/Signup';
import Login from './components/LoginPage/Login';
import dashboard from './components/StudentDashboard/dashboard'
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path='/dashboard' component={dashboard} />
      </Router>
    </div>
  );
}

export default App;