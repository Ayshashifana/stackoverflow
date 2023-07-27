import React, { useState } from 'react'
import {faThumbsUp,faCheck} from  "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./sharepost.css"
import "./People"



const SharePost = ({data}) => { 
  
const [comment, setcomment] = useState("")

const [Switch, setSwitch] = useState(false)

const [follow, setfollow] = useState(true)
const [like, setlike] = useState(true)


 const onClick=()=>{
 setSwitch(true)
 setcomment(comment)
 }

 const onFollow=()=>{
      setfollow(!follow)
 }

 const onlike=()=>{
  setlike(!like)
}
return (
    <div>
        
       
      

  <div className="user">
  <div className="title"><h2>{data.creator}</h2>  
  <button onClick={onFollow}> { follow ? "Follow + " : <FontAwesomeIcon icon={faCheck} /> } </button></div>
      
    <div className='image-container'><img src={data.selectedFile} alt="" srcset="" width="400px" height="300px"  /></div>
    <div className="content">
      <h5>{data.message}</h5>
      <div className="comment">
      <div>
      <label htmlFor="comment">Comment:</label>
      <textarea name="comment" id="" cols="40" rows="2" onChange={(e)=>{setcomment(e.target.value)}}></textarea>
      </div>
     
      <div className='comments'>
      {
        Switch ? ( <div> <h4>You :</h4> <p>{comment}</p> </div>) : null 
      }
          
      </div>
      </div>
     </div>
    <div className='button-cont'>
    <button onClick={onlike}><FontAwesomeIcon icon={faThumbsUp} /> {like ?  "Like" : "Liked"}</button>
    <button  onClick={onClick}>Comment</button>
    </div>
  </div>

      

    </div>
  )
}

export default SharePost