/* React Imports */
import { Helmet } from 'react-helmet';

/* Data Imports */
import Home from './components/Home';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills';
import About from './components/About.jsx';
import Epilogue from './components/Epilogue.jsx';
import Breaker from './components/Breaker.jsx';

/* Style Imports */
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
          <About/>
          <Breaker/>
        </section>

        <section id='skills'>
          <Skills />
          <Breaker/>
        </section>

        <section id='contact'>
          <Contact />
          <Breaker/>
        </section>

        <Epilogue />
      </main>
    </>
  );
}

export default App;
