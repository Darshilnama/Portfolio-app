import './App.css';
import Nevbar from './component/nevbar.js'; 
import Intro from './component/intro.js';
import About from './component/About.js';
import Project from './component/Project.js';
import Contact from './component/Contact.js';
import Footer from './component/Footer.js'
function App() {
  return (
    <>
      <div>
        <Nevbar /> 
        <Intro/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>

      </div>
    </>
  );
}

export default App;