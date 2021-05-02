import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Home from "./Component/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
          <Route path="/home">
            <Home></Home>
         
          </Route>
          <Route path="/admin">
          
          </Route>
          <Route path="/">
            <Home></Home>
            
          </Route>
        </Switch>
     
    </Router>

      
    </div>
  );
}

export default App;
