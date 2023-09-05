import React from 'react'
import "./Quest.css"
import Qu from "../QU/Qu"
import {Dataquest} from "../Dataforquestions"
export default function Quest() {
  return (
    <div className='quest'>
    <div className='container'>

    <div className='creative'>
        <h3>        DO YOU HAVE  <span>QUESTIONS </span>?
</h3>
<p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet.

</p>





    </div>
    <div className='div-quest'>

{Dataquest.map((ques,i)=>{

  console.log(ques.id)
return(


  <div key={ques.id}>
  <Qu  i={i} id ={ques.id} icon={ques.icon1} icon2={ques.icon2} answer={ques.answer} answer2={ques.answer2} quest={ques.quest}/>
  
  </div>
)

})}



    </div>
    </div>
    </div>
  )
}
