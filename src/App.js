import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
