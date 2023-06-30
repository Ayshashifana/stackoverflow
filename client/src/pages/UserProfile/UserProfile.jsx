import React,{useState} from 'react'
import {useSelector} from "react-redux"
import LeftSidebar from '../../components/Leftsidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'
import moment from "moment"
import { useParams } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBirthdayCake,faPen} from "@fortawesome/free-solid-svg-icons"
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import "./ProfileForm.css"

const UserProfile = () => {
    const {id}=useParams();
    const users=useSelector((state)=>state.usersReducer)
    const currentProfile = users.filter((user)=>user._id===id)[0] 
    console.log(currentProfile);
    const currentUser= useSelector((state)=>state.currentUserReducer)


       const [Switch, setSwitch] = useState(false)


  return (
    
    <div className='profile-container1'>
    <LeftSidebar/>
    <div className='profile-container'>
        <section>
            <div className="user-details-cont">
                <div className='user-details'>
                    <Avatar backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px"> 
                    {currentProfile?.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <div className="user-name">
                        <h1>{currentProfile?.name.toUpperCase()}</h1>
                        <p><FontAwesomeIcon icon={faBirthdayCake} /> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                    </div>
                </div>
                {
                    currentUser?.result._id===id && (
                        <button type='button' onClick={()=>setSwitch(true)} className='edit-profile-btn'>
                            <FontAwesomeIcon icon={faPen}  /><span>Edit Profile</span>
                        </button>

                    )
                }
            </div>
            <>
            {
                Switch ? (
                    <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                    ) : (
                        <ProfileBio currentProfile={currentProfile}/>
                    )
                
            }
            </>
        </section>
    </div>
  </div>
  )
}

export default UserProfile