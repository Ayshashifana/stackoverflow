import React from 'react'
import LeftSidebar from '../../components/Leftsidebar/LeftSidebar'
// import { useLocation } from 'react-router-dom'
import UsersList from "./UsersList.jsx"
import "./Users.css"
const Users = () => {
  // const location = useLocation()
  return (
    <div className='user-container'>
    <LeftSidebar/>
    <div className='user-container1'>
     
      <h1>Users</h1>
      <UsersList/>
    
     
    </div>
    </div>
  )
}

export default Users