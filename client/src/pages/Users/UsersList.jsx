import React from 'react'
import { useSelector } from 'react-redux'
import Usser from "./Usser"
import "./Users.css"
const UsersList = () => {
    const users= useSelector((state)=>state.usersReducer)
  //  console.log(users)
  return (
    
    <div className='userList-container'>
       {
        users.map((user)=>
        <Usser user={user}/>
        )
       }
    </div>
  )
}

export default UsersList