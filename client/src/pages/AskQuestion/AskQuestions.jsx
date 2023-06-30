import React,{useState} from 'react'
import "./AskQuestion.css"
 import {useDispatch,useSelector} from "react-redux"
 import {useNavigate} from "react-router-dom"
 import { askQuestion } from '../../actions/question.js'



const AskQuestions = () => {

    const [questionTitle, setquestionTitle] = useState("")
    const [questionBody, setquestionBody] = useState("")
    const [questionTags, setquestionTags] = useState("")

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector((state)=>(state.currentUserReducer))

    function handleSubmit(e){
        e.preventDefault()
        // console.log({questionTitle,questionBody,questionTags})

        dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:user.result.name,userId:user?.result._id},navigate))
    }

    function handleEnter(e){
        if (e.key==="Enter"){
            setquestionBody(questionBody + " \n ")
        }
    }

  return (
    <div className='ask-questions'>
        <div className="ask-quest-container">
            <h1>Ask a Public questions</h1>
           <form onSubmit={handleSubmit}>
            <div className="ask-form-cont">
                <label htmlFor="ask-quest-title">
                    <h4>Title</h4>
                    <p>Be specific and imagine you're asking a question to another person</p>
                    <input type="text" id='ask-quest-title' placeholder='e.g is there a R function in java?' onChange={(e)=>{setquestionTitle(e.target.value)}} />
                </label>

                <label htmlFor="ask-quest-body">
                    <h4>Body</h4>
                    <p>include all the information someone would answer your question</p>
                    <textarea style={{width:"80%"}} onKeyDown={handleEnter} id='ask-quest-body' onChange={(e)=>{setquestionBody(e.target.value)}} placeholder=''></textarea>
                </label>

                <label htmlFor="ask-quest-tags">
                    <h4>Tags</h4>
                    <p>Add upto 5 tags to describe what your question is about</p>
                    <input type="text" id='ask-quest-tags' placeholder='e.g (xml java html)' onChange={(e)=>{setquestionTags(e.target.value.split(" "))}}/>
                </label>

            </div>

            <input type="submit" value=" Review your questions" className='review-btn'/>
            </form> 
        </div>
    </div>
  )
}

export default AskQuestions;