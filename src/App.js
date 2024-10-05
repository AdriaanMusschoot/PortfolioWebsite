import { Helmet } from 'react-helmet';
import Home from './components/Home';
import Contact from './components/Contact';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import WhiteSpace from './components/WhiteSpace';

import './styles/App.css';
import About from './components/About.jsx';

function App() {
  return (
    <>
      <Helmet>
        <title>Adriaan Musschoot Portfolio</title>
      </Helmet>
      <header>
        <Header />
      </header>
      <main>
       <section id='whitespace' className='whitespace'>
        <WhiteSpace />
       </section>
       <section id='home'>
          <Home />
       </section>
       <hr></hr>
       <section id='projects'>
        <h2>Projects</h2>
          <ProjectCard />
       </section>
       <hr></hr>
       <section id='about'>
          <h2>About</h2>
          <About/>
       </section>
       <hr></hr>
       <section id='skills'>
        <h2>Skills</h2>
          <Skills />
       </section>
       <hr></hr>
       <section id='contact'>
        <h2>Contact Details</h2>
          <Contact />
       </section>
      </main>
    </>
  );
}

export default App;
