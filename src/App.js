import "./App.css";
import Navbar from "./components/navbar";
import Branding from "./components/branding";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <Branding />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
