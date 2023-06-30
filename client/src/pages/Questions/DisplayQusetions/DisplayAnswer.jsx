import React from 'react'
import {Link, useParams} from "react-router-dom"
import "./QuestionDetails"
import moment from "moment"
import Avatar from '../../../components/Avatar/Avatar'
import "./questionDetails.css"
import { useDispatch, useSelector } from 'react-redux'
import {deleteAnswer} from "../../../actions/question.js"

const DisplayAnswer = ({question,handleShare}) => {

    const User=useSelector(state=>(state.currentUserReducer))
    const dispatch=useDispatch();
    const {id}=useParams();

    const handleDelete=(answerId,NoOfAnswers)=>{

        dispatch(deleteAnswer(id,answerId,NoOfAnswers-1))
    }
  return (
    <div>

        {
            question.answer.map((ans)=>(
                <div className='display-ans' key={ans._id}>
                    <p>{ans.answerBody}</p>

                    <div className='quest-action-user'>
                    <div>
                        <button type='button' className='edit-quest-btn' onClick={handleShare}>Share</button>

                        {
                            User?.result?._id === ans?.userId &&

                            <button type='button' className='edit-quest-btn' onClick={()=>handleDelete(ans._id,question.NoOfAnswers)}>Delete</button>
                        }

                        
                    </div>
                    <div>
                        <p>answered {moment(ans.answeredOn).fromNow()}</p>
                        <Link to={`/User/${ans.userId}`} className='user-link'>
                          <Avatar backgroundColor="green" px="8px" py="5px"> {ans.userAnswered.charAt(0).toUpperCase()} </Avatar>
                          <div>{ans.userAnswered}</div>
                          </Link>
                    </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAnswer