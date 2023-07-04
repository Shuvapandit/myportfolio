import React from 'react'
import '../Footer/Footer.css'
import linkedin from '../../images/footerimg/linkedin.png'
import github from '../../images/footerimg/github.png'
import facebook from '../../images/footerimg/facebook.png'
import Wave from 'react-wavify'

function Footer() {
  return (
    <div className='marginbottom bottom-0 -space-y-16'>
      <div className=' '>
      <Wave fill='#E5E4E2'
        paused={false}
        options={{
          height: 10,
          amplitude: 70,
          speed: 0.15,
          points: 4
        }}
  />
      </div>
   <div className='footerpart2 flex lg:flex-row  '>
    <div>
      <p className='ml-2'>Copyright © 2023 Shuva Chakraborty</p>
    </div>
<div className='socialmedia   '>
<div class="grid grid-flow-col gap-4 ">

     <a href="https://www.linkedin.com/in/shuva-chakraborty-7aa59818a/"
                  target="_blank">
                  <img src={linkedin}></img>
                </a>
     <a href="https://github.com/Shuvapandit"
                  target="_blank">
                  <img src={github}></img>
                </a>
     <a href="https://www.facebook.com/profile.php?id=100009952750113"
                  target="_blank">
                  <img src={facebook}></img>
                </a>
    </div>

</div>


   </div>
      </div>
  )
}

export default Footer