import React from 'react'
import js from '../../images/teachimg/js.png'
import html from '../../images/teachimg/html.png'
import css from '../../images/teachimg/css.png'
import c from '../../images/teachimg/c.png'
import cplus from '../../images/teachimg/cplus.png'
import bootstrap from '../../images/teachimg/bootstrap.png'
import tailwind from '../../images/teachimg/tailwind.png'
import react from '../../images/teachimg/reactjs.png'
import vite from '../../images/teachimg/vite.svg'
import next from '../../images/teachimg/next.png'
import scss from '../../images/teachimg/sass.png'

function Teach() {
  return (
    <div>
     <p className='text-xl font-semibold font-serif mt-3'>Teach</p>
     <div className='main flex flex-row'>
        <div className='1 '>
        <p className="text-slate-500 text-lg mb-4">Languages</p>
        <div className='flex flex-row mb-3'>
            <div>
<img src={js}/>
            </div>
            <div className='ml-2'>
                JavaScript
            </div>
        </div>
        
        <div className='flex flex-row mb-3'>
            <div>
<img src={html}/>
            </div>
            <div className='ml-2'>
                HTML5
            </div>
        </div>
        <div className='flex flex-row mb-3'>
            <div>
<img src={css}/>
            </div>
            <div className='ml-2'>
                CSS3
            </div>
        </div>
        <div className='flex flex-row mb-3'>
            <div>
<img src={c}/>
            </div>
            <div className='ml-2'>
                C
            </div>
        </div>
        <div className='flex flex-row mb-3'>
            <div>
<img src={cplus}/>
            </div>
            <div className='ml-2'>
                C++
            </div>
        </div>
        <p className="text-slate-500 text-lg mb-4 ">Front-End Frameworks</p>
        
        <div className='flex flex-row mb-3'>
            <div>
<img src={bootstrap}/>
            </div>
            <div className='ml-2'>
            Bootstrap
            </div>
        </div>
        <div className='flex flex-row mb-3'>
            <div>
<img src={tailwind} width='25'height='25' />
            </div>
            <div className='ml-2'>
                Tailwind
            </div>
        </div>
        
        </div>
        
        
        <div className='2 ml-96'>

        <p className="text-slate-500 text-lg mb-4">Javascript Ui.</p>
        <div className='flex flex-row mb-3'>
            <div>
<img src={react} width='25' height='25' />
            </div>
            <div className='ml-2'>
                 React Js
            </div>
        </div>
        <div className='flex flex-row mb-3'>
            <div>
<img src={vite} width='25' height='25' />
            </div>
            <div className='ml-2'>
                Vite Js
            </div>
        </div>
        <div className='flex flex-row mb-3'>
            <div>
<img src={next} width='30' height='25' />
            </div>
            <div className='ml-2'>
                Next js
            </div>
        </div>
        <p className="text-slate-500 text-lg mb-4">CSS Pre-processors</p>
        <div className='flex flex-row'>
            <div>
<img src={scss}/>
            </div>
            <div>
                SCSS
            </div>
        </div>

        </div>

     </div>
     </div>
  )
}

export default Teach