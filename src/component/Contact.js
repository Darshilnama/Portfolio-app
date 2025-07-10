import React,{useRef} from 'react'
import '../component/Contact.css'
import linkedin from '../asset/linkedin.svg'
import github from '../asset/github.svg'
import insta from '../asset/instagram.svg'
import facebook from '../asset/facebook.svg'
import emailjs from '@emailjs/browser'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs
          .sendForm('service_g9uzmrr', 'template_ikifarn', form.current, {
            publicKey: 'Aa97jlYaN3-AxEqVc',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              // Manually clear each field
              form.current.from_name.value = "";
              form.current.your_email.value = "";
              form.current.message.value = "";
             
            },
            (error) => {
              console.log('FAILED...', error.text);
              
            },
          );
      };
  return (

    <>
    <section id='contact'>
        <div id='social'>
            <h1 className='socialTitle'>Socials</h1>
            <p>Here you connect eith me on my social media</p>

            <div className='socialImgs'>
                <a href='https://www.linkedin.com/in/darshil-nama-06757532a/'><img src={linkedin} alt='Social' className='socialImg'/></a>
                <a href='https://github.com/Darshilnama'><img src={github} alt='Social' className='socialImg'/></a>
                <a href='https://www.instagram.com'><img src={insta} alt='Social' className='socialImg'/></a>
                <a href='https://www.facebook.com'><img src={facebook} alt='Social' className='socialImg'/></a>

            </div>

        </div>
        <div id='contactpage'>
            <h1 id='contactTitle'>Contact</h1>
            <span className='contactDesc'>Feel free to contact me</span>

            <form className='contactform' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'/>
                <button type='submit' value="Send" className='submitBtn' onClick={() => {alert("Form submitted")}
                }>Submit</button>


            </form>

        </div>
    </section>
      
    </>
  )
}

export default Contact
