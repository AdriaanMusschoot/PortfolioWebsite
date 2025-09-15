import { Helmet } from 'react-helmet';
import Home from './components/Home';
import Contact from './components/Contact';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import WhiteSpace from './components/WhiteSpace';
import About from './components/About.jsx';
import Breaker from './components/Breaker.jsx';

import './styles/App.css';

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
        <section id ='breaker'>
          <Breaker/>
        </section>

        <section id='projects'>
          <h2>Projects</h2>
          <ProjectCard />
        </section>
        <section id ='breaker'>
          <Breaker/>
        </section>

        <section id='about'>
          <h2>About</h2>
          <About/>
        </section>
        <section id ='breaker'>
          <Breaker/>
        </section>

        <section id='skills'>
          <h2>Skills</h2>
          <Skills />
        </section>
        <section id ='breaker'>
          <Breaker/>
        </section>

        <section id='contact'>
          <h2>Contact</h2>
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
