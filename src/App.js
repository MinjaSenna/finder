 import React from 'react';
 import {BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
 import NavBar from "./components/layout/Navbar"; 
 import Alert from "./components/layout/Alert"; 
 import About from "./components/pages/About"; 
 import NotFound from "./components/pages/NotFound"; 
 import Home from "./components/pages/Home"; 
 import Indiuser from './components/users/Indiuser'

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
 
        <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />  
         <Route exact path="/indiuser/:login" component={Indiuser} /> 
         <Route component={NotFound} /> 

 
    </Switch>
         </div>
    
     </div> 
   
   </Router>
   </AlertState>
   </GithubState>
   );
 }
 
 export default App;