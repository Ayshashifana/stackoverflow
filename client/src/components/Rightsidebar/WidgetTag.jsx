import React from 'react'
import './RightsideBar.css'
const WidgetTag = () => {
  const tags=['c','css','javascript','firebase','html','bootstrap','mern','react','python','jquery','nodejs','java','django','mysql','mongodb']

  return (
   
    <div className='widget-tags'>
      <h3>Watched tags</h3>
      <div className='widget-tags-div'>
        {
          tags.map((tag)=>(
            <p key={tag}>{tag}</p>
          ))
        }
      </div>
    </div>
  )
}

export default WidgetTag