import { Helmet } from 'react-helmet';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';

import './styles/App.css';

function App() {
  return (
    <>
      <Helmet>
        <title>Adriaan Musschoot</title>
      </Helmet>
      <header>
        <Header />
      </header>
      <main>
        <section id='about' className='about'>
          <About />
        </section>
        <hr></hr>
        <section id='projects'>
          <h2>My projects</h2>
          <ProjectCard />
        </section>
        <hr></hr>
        <section id='skills'>
          <h2>My skills</h2>
          <Skills />
        </section>
        <hr></hr>
        <section id='contact'>
          <Contact />
        </section>
      </main>
      <footer>
        <p>jajagg</p>
      </footer>
    </>
  );
}

export default App;
