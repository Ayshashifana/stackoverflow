import React from 'react'

import LeftSidebar from "../../components/Leftsidebar/LeftSidebar"
import RigthSidebar from "../../components/Rightsidebar/RightSidebar"
import MainBar from "../../components/Mainbar/Mainbar"

import "../../App.css"

const Questions = () => {
  return (
    <div className='home-container1'>
      <LeftSidebar/>
      <div className='home-container2'>
        <MainBar/>
        <RigthSidebar/>
      </div>
    </div>
  )
}

export default Questions