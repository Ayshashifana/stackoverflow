import React from 'react'
import { useSelector } from 'react-redux';
import {useLocation,useNavigate} from "react-router-dom";
import QuestionList from './QuestionList';


import "./Mainbar.css"

const Mainbar = () => {

  const quesList=useSelector((state)=>state.questionReducer)
  // console.log(quesList)
  
//   var quesList=[
//     {_id:'1',
// NoOfAnswers:3,
// Votes:5,
// Upvotes:1,
// Downvotes:2,
// questionTitle:"What is javascript",
// questionBody:"what is javascript?",
// questionTags:["java",'js','html'],
// userPosted:'aysha',askedOn:"jan 1",
// userId:3,
// answer:[{
//   answerBody:"answer",
//   userAnswered:"aysha",
//   answeredOn:"jan 4"
// }]},

//     {_id:'2',
//   NoOfAnswers:6,
//   Votes:4,
//   upVotes:1,
//   downVotes:2,
//   questionTitle:"rontend frame work",
//   questionBody:"sql library or datsbase?",
//   questionTags:["java",'js','html'],
//   userPosted:'rida',askedOn:"jan 19",
//   userId:3,
//   answer:[{
//   answerBody:"answer",
//   userAnswered:"aysha",
//   answeredOn:"jan 4"
// }]},

//     {_id:'3',
//     NoOfAnswers:5,
//     Votes:7,
//     Upvotes:1,
//     Downvotes:2,
//     questionTitle:"what does sql do?",
//     questionBody:"stack overflow?",
//     questionTags:["java",'js','html','backend','nodejs'],
//     userPosted:'aysha',askedOn:"jan 1",
//     userId:3,
//   answer:[{
//   answerBody:"answer",
//   userAnswered:"aysha",
//   answeredOn:"jan 4"
// }]}
//   ]
    const location = useLocation()
    const navigate =useNavigate()

    const user=1;

    function checkAuth(){
      if(user===null){
        alert("login or signup")
        navigate("./Auth")
      }else{
        navigate("./AskQuestions")
      }

    }


  return (
          <div className='main-bar'>
              <div className='main-header'>
                {
                    location.pathname === "/" ? 
                    <h1>Top Question</h1> : <h1>All Questions</h1>
                }

                <button onClick={checkAuth}  className='ask-btn'> Ask Questions</button>
              </div>

              <div>
               {
                quesList.data=== null ? <h1> Loading ..</h1> :

                < > <p>{quesList.data.length} questions</p></>
               }
                
                <QuestionList questionlist={quesList.data} />

              </div>


          </div>
  )
}

export default Mainbar