import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Footer from "./Component/Home/Footer/Footer";
import Home from "./Component/Home/Home/Home";
import Navbar from "./Component/Home/Navbar/Navbar";
import Services from "./Component/Home/Service/Services/Services";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {
  const [loggedInUser ,setLoggedInUser] =useState([])
  return (
    <userContext.Provider  value={[loggedInUser ,setLoggedInUser ]}>
    <div className="App">
      <Router>
       <Switch>
          <Route path="/home">
            <Home></Home>
         
          </Route>
          <PrivateRoute path="/services">
            <Navbar></Navbar>
           
            <Services showbtn={true} ></Services>
            <Footer></Footer>
         
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          
         
          </Route>
          <Route path="/admin">
          
          </Route>
          <Route path="/">
            <Home></Home>
            
          </Route>
        </Switch>
     
    </Router>

      
    </div>
    </userContext.Provider>
  );
}

export default App;
