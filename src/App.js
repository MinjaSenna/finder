 

 import React, {useState, Fragment} from 'react';
 import {BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
 import NavBar from "./components/layout/Navbar"; 
 import Search from "./components/users/Search"; 
 import Alert from "./components/layout/Alert"; 
 import About from "./components/pages/About"; 
 import Indiuser from './components/users/Indiuser'
 import Users from "./components/users/Users"; 
 import axios from "axios"; 

import GithubState from "../src/context/github/GithubState"; 
 
  import './App.css';
 
 
 const App = () =>  {
  const [loading, setLoading] = useState(false); 
  const [alert, setAlert] = useState(null); 

     // set an alert if the search string is empty 
 
     const showAlert = ( msg, type) => {
       setAlert({ msg, type }); 
       setTimeout(() => setAlert( null), 5000); 
 
     } 
 
      return (
     <GithubState>
     <Router>
     <div className="App">
       <NavBar title=" Github Finder" /> 
 
       <div className="container"> 
       <Alert alert={alert} />
 
       <Switch> 
 
         <Route exact path="/" render={props => (
 
             <Fragment>
               <Search setAlert = {showAlert} /> 
 
               <Users  /> 
               
                </Fragment>
 
         )} />
         <Route exact path="/about" component={About} /> 
 
         <Route exact path="/indiuser/:login" component={Indiuser} /> 
 
    </Switch>
         </div>
    
     </div> 
   
   </Router>
   </GithubState>
   );
 }
 
 export default App;