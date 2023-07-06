import React from 'react'
import brac from "../../images/brac.png"

function Professionalism() {
  return (
    <div>
      <p className='text-xl font-semibold font-serif'>Professionalism</p> 
      <p className='text-slate-500'>Expertise</p> 
      <div className='mt-3'>
      <button class="btn btn-ghost rounded-full text-slate-500"> <img src={brac}></img>Software engineering</button>
      </div>
     
     
    </div>
  )
}

export default Professionalism