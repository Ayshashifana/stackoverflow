import React, { useState } from 'react'

import code1 from "../../assets/code1.jpg"
import code2 from "../../assets/code2.jpg"
import code3 from "../../assets/code3.jpg"
import {faThumbsUp} from  "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SharePost from './SharePost'
import FileBase64 from 'react-file-base64';


import "./people.css"


const People = () => {

  const [Switch,setSwitch]=useState(false)


  
  const [postData, setpostData] = useState({creator:"",message:"",selectedFile:""})
   const [Items,setItems]=useState([])


    const handleSubmit=(e)=>{
        e.preventDefault()
        setItems(prevItems=>{
        return[...prevItems,postData]
})
      setSwitch(false)
      setpostData("")
  }
 

  const handlePost=()=>{
    setSwitch(true)
     }
    
  return (
  <div className='shar'>
  <button className='post-btn' onClick={handlePost} >Post +</button>
  <>
    {
      Switch ? (
      

        <form className='post-form' onSubmit={handleSubmit}>
        
        <div className='title-cont'>
        <label htmlFor="name">Creator :</label>
         <input type="text" id='name'  value={postData.creator} onChange={(e)=>setpostData({...postData,creator:e.target.value})} />
        </div>
         
        <div className='image-cont'>
        <img src={postData.selectedFile } alt="" />
        </div>
        <div className='file-button' ><FileBase64 type="file"  multiple={false} onDone={({base64})=>setpostData({...postData,selectedFile:base64})} /></div>
        <div className='caption'>
        <label htmlFor="message">Ur Message : </label>
        <input type="text" id='message' value={postData.message} onChange={(e)=>setpostData({...postData,message:e.target.value})}/>
        </div>

        <input type="submit" value="Post" />
            

        </form>

      ) : null
    }
  </>
   <div className='people-container'>

    <div className="user">
  <div className="title"><h2>jack</h2>  
  <button> Follow+ </button></div>
      
    <div className='image-container'><img src={code1} alt="" srcset="" width="400px" height="300px"  /></div>
    <div className="content">
      <h5>Coding like poetry should be short and concise</h5>
      <div className="comment">
      <div>
      <label htmlFor="comment">Comment:</label>
      <textarea name="comment" id="" cols="40" rows="2" ></textarea>
      </div>
     
      <div className='comments'>
        

      </div>
      </div>
     </div>
    <div className='button-cont'>
    <button><FontAwesomeIcon icon={faThumbsUp} /> Like</button>
    <button >Comment</button>
    </div>
  </div>


  <div className="user">
  <div className="title"><h2>Rida</h2>  
  <button> Follow+ </button></div>
      
    <div className='image-container'><img src={code2} alt="" srcset="" width="400px" height="300px"  /></div>
    <div className="content">
      <h5>Coding like poetry should be short and concise</h5>
      <div className="comment">
      <div>
      <label htmlFor="comment">Comment:</label>
      <textarea name="comment" id="" cols="40" rows="2" ></textarea>
      </div>
     
      <div className='comments'>
          
      </div>
      </div>
     </div>
    <div className='button-cont'>
    <button > <FontAwesomeIcon icon={faThumbsUp} /> Like</button>
    <button >Comment</button>
    </div>
  </div>

  <div className="user">
  <div className="title"><h2>Arshin</h2>  
  <button> Follow+ </button></div>
      
    <div className='image-container'><img src={code3} alt="" srcset="" width="400px" height="300px"  /></div>
    <div className="content">
      <h5>Coding like poetry should be short and concise</h5>
      <div className="comment">
      <div>
      <label htmlFor="comment">Comment:</label>
      <textarea name="comment" id="" cols="40" rows="2" ></textarea>
      </div>
     
      <div className='comments'>
          
      </div>
      </div>
     </div>
    <div className='button-cont'>
    <button ><FontAwesomeIcon icon={faThumbsUp} /> Liked</button>
    <button >Comment</button>
    </div>
  </div>
    
    {Items.map((data,index)=>(
      <SharePost key={index} data={data} />
    ))}
    
    
     </div>
    </div>
  )
}

export default People