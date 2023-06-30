import React from 'react'
 import Widget from './Widget'
 import WidgetTag from './WidgetTag'
 import "./RightsideBar.css"
  
const RightSidebar = () => {
  return (
    <aside className='rightside-bar'>
      <Widget/>
      <WidgetTag/>
    </aside>
  )
}

export default RightSidebar