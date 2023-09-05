import React from 'react'
import "./Person.css"
import {Datafirstprog}from "../Dataprog.js"
import { CiLocationOn } from 'react-icons/ci';
export default function Person() {
   
    return(
    <>
{Datafirstprog.map(item=>{
    return(
        
<div key={item.id} className="person">

<div>
    <img src={item.image} alt=""/>
</div>

<div className="pro-text">
    <div className="time-room">
        <p><span className='svg'>{item.clock}</span><span>{item.time}</span></p>
        <p><span className='svg'><CiLocationOn /></span><span>{item.room}</span></p>

    </div>
<p className="heading"> {item.title}
</p>

<p className="small">
{item.by}

</p>
<p className='des'>
{item.desc}
</p>
    </div>
    </div>
    )
})}


    </>

  )
}
