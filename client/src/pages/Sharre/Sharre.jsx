import React from 'react'
import LeftSidebar from '../../components/Leftsidebar/LeftSidebar'
import RigthSidebar from "../../components/Rightsidebar/RightSidebar"
import Shaare from "./Shaare"

const Sharre = () => {
  return (
    <div className='home-container1'>
      <LeftSidebar/>
      <div className='home-container2'>
      <Shaare/>
        <RigthSidebar/>
      </div>
    </div>
  )
}

export default Sharre