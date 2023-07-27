import React from 'react'
import LeftSidebar from '../../components/Leftsidebar/LeftSidebar'
import RigthSidebar from "../../components/Rightsidebar/RightSidebar"
import Buyy from "./Buyy.jsx"
const Buy = () => {
  return (
    <div className='home-container1'>
      <LeftSidebar/>
      <div className='home-container2'>
        <Buyy/>
        <RigthSidebar/>
      </div>
    </div>
  )
}

export default Buy