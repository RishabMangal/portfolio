import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Resume from './Resume'
import { HashRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Resume}></Route>
      </Router>
    </div>
  );
}

export default App;
