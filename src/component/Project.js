import React from 'react'
import '../component/Project.css'
import img from '../asset/pngwing.com-2.png'
function Project() {
  return (
    <>
    <section id='project'>
        <h2 className='projectTitle'>My Project</h2>
        <span className='projectdesc'>Here are my projects</span>
        <div className='project-item'>

            <div className='item-detail'>
                <p className='p1'>Project 1</p>
                <p className='p2'>TechStack :- HTML and CSS</p>
            </div>
            <img src={img} alt='project' className='projimg'/>

            <div className='item-detail'>
                <p className='p1'>Project 2</p>
                <p className='p2'>TechStack :- C++</p>
            </div>
            <img src={img} alt='project' className='projimg'/>

            <div className='item-detail'>
                <p className='p1'>Project 3</p>
                <p className='p2'>TechStack :- React JavaScript</p>
            </div>
            <img src={img} alt='project' className='projimg'/>
        </div>

    </section>

      
    </>
  )
}

export default Project
