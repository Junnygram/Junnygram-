// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div>
      <ParticleBackground />
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
