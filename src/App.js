/* React Imports */
import { Helmet } from 'react-helmet';

/* Data Imports */
import Home from './components/home/Home.jsx';
import Contact from './components/contact/Contact.jsx';
import Header from './components/header/Header.jsx';
import Projects from './components/projects/Projects.jsx';
import Skills from './components/skills/Skills';
import About from './components/about/About.jsx';
import Epilogue from './components/epilogue/Epilogue.jsx';

/* Style Imports */
import './styles/App.scss';

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
