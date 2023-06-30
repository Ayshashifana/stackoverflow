import React from 'react'

function Avatar ({children,backgroundColor,px,py,color,borderRadius,fontSize,cursor}) {
  const styles={
    backgroundColor,padding:`${py} ${px}`,color:color || "black",borderRadius,fontSize,textAlign:"center",cursor:cursor || null
  }
  return (
    <div style={styles}>{children}</div>
  )
}

export default Avatar;