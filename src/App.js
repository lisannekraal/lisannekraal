import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import References from './components/References';
import Facts from './components/Facts';
import ScrollArrow from './components/ScrollArrow';



function App() {
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({ height: window.innerHeight, width: window.innerWidth});
      console.log(dimensions);
    }

    window.addEventListener('resize', handleResize);
    return _ => {
      window.removeEventListener('resize', handleResize);
    }
  })

  return (
    <div className="App">
      <ScrollArrow />
      <Header dimensions={dimensions} />
      <Skills />
      <Projects dimensions={dimensions} />
      <Timeline />
      <References dimensions={dimensions} />
      <Facts dimensions={dimensions} />
      <Contact dimensions={dimensions} />
      <Footer />
    </div>
  );
}

export default App;
