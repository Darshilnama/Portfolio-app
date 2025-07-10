import React from 'react'
import '../component/intro.css'
import { Link } from 'react-scroll'
import btnimg from '../asset/hireme.png'
import logo2 from '../asset/pngwing.com.png'

function Intro() {
  return (
   <>
   <section id='intro'>
    <div className='introcontent'>
        <span className='hello'>Hello</span>
        <span className='introtext'>
            I'm <span className='introname'>Darshil</span>
            <br/>
            Web Developer

        </span>
        <p className='intopara'>
            I am a skilled web developer with experince in creating
            <br/>
            visually appealing and user friendly websites.
        </p>
        <Link to='contactpage'>
         
          <button className='btn2'>
            <img src={btnimg} alt='img' className='btnimg2'/>
            Hire Me
          </button>
        </Link>

    </div>
    <img src={logo2} alt='react_logo' className='logo2'/>

   </section>
   </>
  )
}

export default Intro
