import './App.css';

import Header from './components/Header';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import References from './components/References';
import Facts from './components/facts';
import ScrollArrow from './components/ScrollArrow';



function App() {

  return (
    <div className="App">
      <ScrollArrow />
      <Header />
      <Skills />
      <Projects />
      <Timeline />
      <References />
      <Facts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
