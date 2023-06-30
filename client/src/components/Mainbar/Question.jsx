import React from 'react'
import {Link} from "react-router-dom"
import moment from 'moment'
import "./Mainbar.css"



const Question = ({question}) => {
  return (
    <div className='ans-container'>
      <div className='disp-ans-votes'>
        <p>{question.upVotes.length-question.downVotes.length}</p>
        <p>votes</p>
      </div>

      <div className='disp-ans-votes'>
        <p>{question.NoOfAnswers}</p>
        <p>answers</p>
      </div>

      <div className='disp-quest-details'>

        <Link to={`/Questions/${question._id}`}  className='disp-title-link'><p>{question.questionTitle}</p></Link>
        
        <div className='disp-tags-time'>
          <div className='disp-tags'>
             
             {
              question.questionTags.map((tag)=>(

                <p key={tag}> {tag} </p>
              
              ))
              }
            
             </div>

             <p className='disp-time'>
              asked {moment(question.askedOn).fromNow()} {question.userPosted}
             </p>
        </div>
      
      </div>
    </div>
  )
}

export default Question 