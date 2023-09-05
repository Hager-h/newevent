import React from 'react'
import "./Person.css"
import {Datasecondprog}from "../Dataprog.js"
import { CiLocationOn } from 'react-icons/ci';
export default function Person2() {
   
    return(
    <>


{Datasecondprog.map(item2=>{
    return(
        
<div  key={item2.id} className="person">

<div>
    <img src={item2.image} alt=""/>
</div>

<div className="pro-text">
    <div className="time-room">
        <p><span className='svg'>{item2.clock}</span><span>{item2.time}</span></p>
        <p><span className='svg'><CiLocationOn /></span><span>{item2.room}</span></p>

    </div>
<p className="heading"> {item2.title}
</p>

<p className="small">
{item2.by}

</p>
<p className='des'>
{item2.desc}
</p>
    </div>
    </div>
    )
})}


    </>

  )
}
