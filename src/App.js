import { Helmet } from 'react-helmet';
import Home from './components/home/Home.jsx';
import Contact from './components/contact/Contact.jsx';
import Header from './components/header/Header.jsx';
import Projects from './components/projects/Projects.jsx';
import Skills from './components/skills/Skills.jsx';
import About from './components/about/About.jsx';
import Breaker from './components/breaker/Breaker.jsx';

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
        <section id='home'>
          <Home />
          <Breaker/>
        </section>

        <section id='projects'>
          <Projects />
          <Breaker/>
        </section>

        <section id='about'>
          <h2>About</h2>
          <About/>
          <Breaker/>
        </section>

        <section id='skills'>
          <h2>Skills</h2>
          <Skills />
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
