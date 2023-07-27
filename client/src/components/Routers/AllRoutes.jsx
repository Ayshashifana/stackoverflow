import React from 'react'
import {Routes,Route} from "react-router-dom";

import Home from '../../pages/home/Home';
import Auth from '../../pages/Auth/Auth';
import Questions from "../../pages/Questions/Questions"
import AskQuestions from "../../pages/AskQuestion/AskQuestions"
import DisplayQuestions from "../../pages/Questions/DisplayQusetions/DisplayQuestion"
import Tags from '../../pages/Tags/Tags';
import Users from "../../pages/Users/Users"
import UserProfile from '../../pages/UserProfile/UserProfile';
import Buy from '../../pages/Buy/Buy';
import Sharre from "../../pages/Sharre/Sharre"
import ChatBot from "../../pages/ChatBot/ChatBot"



const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Auth" element={<Auth/>}/>
        <Route path="/Questions" element={<Questions/>}/>
        <Route path="/AskQuestions" element={<AskQuestions/>}/>
        <Route path="/Questions/:id" element={<DisplayQuestions/>}/>
        <Route path="/Tags" element={<Tags/>}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/Users/:id" element={<UserProfile/>}/>
        <Route path="/Buy" element={<Buy/>}/>
        <Route path="/share" element={<Sharre/>}/>
        <Route path="/Chat" element={<ChatBot/>}/>
       
    </Routes>
    
  )
}

export default AllRoutes