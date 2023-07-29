import React from 'react'
import LeftSidebar from '../../components/Leftsidebar/LeftSidebar'
import RigthSidebar from "../../components/Rightsidebar/RightSidebar"
import Chat from './Chat'


const ChatBot = () => {
  return (
    <div className='home-container1'>
      <LeftSidebar/>
      <div className='home-container2'>
         <Chat/>
        <RigthSidebar/>
      </div>
    </div>
  )
}

export default ChatBot