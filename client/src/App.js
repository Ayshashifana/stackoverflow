
import {BrowserRouter as Router } from "react-router-dom"
import { useEffect } from "react";
import { fetchAllQuestions } from "./actions/question.js";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import AllRoutes from "./components/Routers/AllRoutes";
import { fetchAllUsers } from "./actions/users.js";



function App() {
  const dispatch=useDispatch()
  
useEffect(()=>{
  dispatch(fetchAllQuestions())
  dispatch(fetchAllUsers())
},[dispatch]
)

  return (
<div className="App">
  <Router><Navbar/>
  <AllRoutes/>
  </Router>
      
    </div>
  );
}

export default App;
