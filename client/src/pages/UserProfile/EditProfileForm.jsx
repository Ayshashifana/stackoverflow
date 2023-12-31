import React,{useState} from 'react'
import "./ProfileForm.css"
import {useDispatch} from "react-redux"
import {updateProfile} from "../../actions/users.js"



const EditProfileForm = ({currentUser,setSwitch}) => {

  const [name, setname] = useState(currentUser?.result.name)
  const [about, setabout] = useState(currentUser?.result.about)
  const [tags, setTags] = useState([])
  const dispatch=useDispatch()
 

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(tags.length===0){
      
      dispatch(updateProfile(currentUser?.result?._id,{name,about,tags:currentUser?.result?.tags}))
    }else{
      dispatch(updateProfile(currentUser?.result?._id,{name,about,tags}))
    }
    setSwitch(false)
  }

  return (
    <div>
      <h1 className='edit-profile-title'>Edit Your Profile</h1>
      <h2 className='edit-profile-title2'> Public Information</h2>
      <form className='edit-profile-form' onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3>Display Name</h3>
          <input id="name" type="text" value={name} onChange={(e)=>setname(e.target.value)} />
        </label>

        <label htmlFor="about">
          <h3>About me</h3>
          <textarea  id="about" cols="30" rows="10" value={about} onChange={(e)=>setabout(e.target.value)}></textarea>
        </label>

        <label htmlFor="tags">
          <h3>Watched Tags</h3>
          <p>Add Tags seperated by 1 space</p>
          <input type="text" id='tags' onChange={(e)=>setTags(e.target.value.split(" "))} />
        </label>
        <br />

        <input type="submit" value="Save Profile" className='user-submit-btn' />
        <button type='button' className='user-cancel-btn' onClick={()=>setSwitch(false)}> Cancel </button>

      </form>
    </div>
  )
}

export default EditProfileForm