import React from 'react'
import LeftSidebar from '../../../components/Leftsidebar/LeftSidebar'
import RightSidebar from '../../../components/Rightsidebar/RightSidebar'
import QuestionDetails from  "./QuestionDetails"

const DisplayQuestion = () => {
  return (
    <div className='home-container1'>
      <LeftSidebar/>
      <div className='home-container2'>
        <QuestionDetails/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default DisplayQuestion