import React from 'react'

import {NavLink} from "react-router-dom"
import Globe from "../../assets/Globe.svg"

import "./LeftSidebar.css"

const LeftSidebar = () => {
  return (


    <div className='leftsidebar'>
      <nav className='side-nav'>
        <NavLink to="/" className="sidenav-links" >

          <p>
            Home
          </p>

        </NavLink>

    <div className='sidenav-div'>
      <div>
        <p>PUBLIC</p>
      </div>

      <NavLink to='/Questions' className="sidenav-links" activeclass="active" >

        <img src={Globe} alt="globe" />
        <p style={{paddingLeft:"10px"}}>Questions</p>
      </NavLink>

      <NavLink to="/Tags" className="sidenav-links"  activeclass="active">
        <p>Tags</p>
      </NavLink>

      <NavLink to="/Users" className="sidenav-links" activeclass="active">
        <p>Users</p>
      </NavLink>


    </div>
      </nav>
    </div>
  )
}

export default LeftSidebar