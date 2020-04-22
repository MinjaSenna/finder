 

 import React, {useState, Fragment} from 'react';
 import {BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
 import NavBar from "./components/layout/Navbar"; 
 import Search from "./components/users/Search"; 
 import Alert from "./components/layout/Alert"; 
 import About from "./components/pages/About"; 
 import Indiuser from './components/users/Indiuser'
 import Users from "./components/users/Users"; 

import GithubState from "../src/context/github/GithubState"; 
import AlertState from "../src/context/alert/alertState"; 
 
  import './App.css';
 
 
 const App = () =>  {
       return (
     <GithubState>
       <AlertState>
         <Router>
         <div className="App">
           <NavBar title=" Github Finder" /> 
 
           <div className="container"> 
             <Alert />
 
            <Switch> 
 
             <Route exact path="/" render={props => (
 
             <Fragment>
               <Search/> 
 
               <Users  /> 
               
                </Fragment>
 
         )} />
         <Route exact path="/about" component={About} /> 
 
         <Route exact path="/indiuser/:login" component={Indiuser} /> 
 
    </Switch>
         </div>
    
     </div> 
   
   </Router>
   </AlertState>
   </GithubState>
   );
 }
 
 export default App;