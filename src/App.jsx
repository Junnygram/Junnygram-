// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div>
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
