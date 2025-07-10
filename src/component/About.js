import React from 'react'
import '../component/About.css'
import html from '../asset/HTML5_Badge.svg'
import css from '../asset/css-3.svg'
import java from '../asset/javascript.svg'
function About() {
  return (
    <>
      <section id='about'>
        <span className='aboutTitle'>What I Know</span>
        <span className='aboutDesc'>
        I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have 
        a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript.</span>
        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={html} alt='HTML' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>HTML</h2>
                    <p>Hyper Text Markup Language</p>
                </div>

            </div>
            <div className='aboutBar'>
                <img src={css} alt='CSS' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>CSS</h2>
                    <p>Cascading Style Sheets</p>
                </div>

            </div>   
            <div className='aboutBar'>
                <img src={java} alt='JAVA' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>JS</h2>
                    <p>JavaScript</p>
                </div>

            </div> 
        </div>

      </section>
    </>
  )
}

export default About
