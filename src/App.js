import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Footer from './components/Footer';
import './App.css';
import 'aos/dist/aos.css'; // Animation library for scroll
import AOS from 'aos'; // Import Animate On Scroll

function App() {
  // Initialize AOS for animations
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Languages />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
