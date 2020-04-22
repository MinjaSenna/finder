 

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
  const [repos, setRepos] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [alert, setAlert] = useState(null); 

 /*
    async componentDidMount(){
     this.setState.loading = true; 
     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SERCRET}`); 
     this.setState({users: res.data, loading: false})
     }
     */ 
 
     // Search Github users 
    
  
   
 
 
     // get user's repositories from Github
     const getUserRepos = async (username) => {
      setLoading(true); 
      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SERCRET}`); 
       setRepos(res.data);
       setLoading(false); 
     }
 
 
   
 
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
 
         <Route exact path="/indiuser/:login" render={props => (
           <Indiuser {...props } getUserRepos={getUserRepos} repos={repos} /> 
         )} /> 
 
    </Switch>
         </div>
    
     </div> 
   
   </Router>
   </GithubState>
   );
 }
 
 export default App;