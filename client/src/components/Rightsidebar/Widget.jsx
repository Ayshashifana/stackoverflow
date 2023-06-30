import React from 'react'
import "./RightsideBar.css"
import message from "../../assets/message-solid.svg"
  import pen from "../../assets/pen-solid.svg"
  import blacklogo from "../../assets/blacklogo.svg"

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow Blog</h4>
      <div className='rightside-bar-div'>

        <div className='rightside-bar-div-1'>
          <img src={pen} alt="pen" width="18px" />
          <p>The meeting that changed how we build software</p>
          </div>
          <div className='rightside-bar-div-1'>
          <img src={pen} alt="pen" width="18px" />
          <p>2023 Developer Survey results are in: the latest trends in technology and...</p>
        </div>

      </div>


      <h4>Feautured on Meta</h4>
      <div className='rightside-bar-div'>

        <div className='rightside-bar-div-1'>
          <img src={message} alt="pen" width="18px" />
          <p>We are graduating the updated button styling for vote arrows</p>
          </div>
          <div className='rightside-bar-div-1'>
          <img src={message} alt="pen" width="18px" />
          <p>Statement from SO: June 5, 2023 Moderator Action</p>
        </div>

      </div>



      <h4>Most Media Posts</h4>
      <div className='rightside-bar-div'>

        <div className='rightside-bar-div-1'>
          <img src={blacklogo} alt="pen" width="18px" />
          <p>Does the policy change for AI-generated content affect users who (want to)...</p>
          </div>

          <div className='rightside-bar-div-1'>

          <img src={blacklogo} alt="pen" width="18px" />
          <p>Temporary policy: ChatGPT is banned</p>
        </div>

      </div>


      </div>
  )
}

export default Widget