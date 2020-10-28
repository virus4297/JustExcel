import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavBar';
import Courselist from './components/Courselist'

function App() {
  return (
    <div className="App">
      <AppNavBar/>
      <Courselist/>
    </div>
  );
}

export default App;