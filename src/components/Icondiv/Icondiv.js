import React from 'react'
import "./Icondiv.css"
function Icondiv({id,icon,title,description}) {
  return (
    <div className="format" >
    <i>{icon}</i>
    <h4>{title}</h4>
    <p>{description}</p>
    
    </div>
  )
}

export default Icondiv