import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
