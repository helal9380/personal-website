/** @format */

import "./App.css";
import About from "./Coponents/About";
import Contact from "./Coponents/Contact/Contact";
import Experience from "./Coponents/Experience";
import Footer from "./Coponents/Footer";
import Hero from "./Coponents/Hero";
import Navbar from "./Coponents/Navbar";
import ProjectsSection from "./Coponents/ProjectsSection";
import Skills from "./Coponents/Skills";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <ProjectsSection></ProjectsSection>
      <Experience />
      <Contact></Contact>
      <Footer />
    </div>
  );
}

export default App;
