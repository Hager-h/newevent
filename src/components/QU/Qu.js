import React, { Fragment } from 'react'
import "./Qu.css"
import { useState } from 'react'
export default function Qu({i,id,answer,icon,icon2,quest,answer2}) {

    const [active,setactive]=useState(1)



const openCloseFun=(id)=>{
if (active===id){
     return setactive(null)
}else{

  setactive(id)
}
}


  return (
    <>
    <div className='quest-con' key={id} onClick={()=>openCloseFun(id)}>

<div className='qu'>
  <h3>{quest}</h3>
  <span>{active===id?icon2:icon}</span>
</div>
<div className={active===id?"shown":"answer"}>
  <p className='first-ans'>{answer}

  </p>
  <p className='second-ans'>
{answer2}

  </p>
</div>
</div>
    
    
    
    
    </>
    
    
  )
}
