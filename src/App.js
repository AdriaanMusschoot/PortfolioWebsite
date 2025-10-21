/* React Imports */
import { Helmet } from 'react-helmet';

/* Data Imports */
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Header from './components/Header.jsx';
import Projects from './components/projects/Projects.jsx';
import Skills from './components/Skills';
import About from './components/About.jsx';
import Epilogue from './components/Epilogue.jsx';

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
        <Home />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Epilogue />
      </main>
    </>
  );
}

export default App;
