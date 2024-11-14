
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project.tsx';
import About from "./components/About.tsx";
import Competence from "./components/Competence.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Hero />
        <About />
        <Project />
       <Competence />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
