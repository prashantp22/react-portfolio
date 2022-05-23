import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero/>
      <About/>
      <Portfolio/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
