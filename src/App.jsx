import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Featured from "./Components/Featured/Featured";
import { ThemeProvider } from "./Context/ThemeContext";
import Dashboards from "./Components/Dashboards/Dashboards";

function App() {
  return (
    <ThemeProvider>
      <div className="pt-20 bg-[#171d32] dark:bg-gray-900 text-white dark:text-gray-200 h-auto w-full overflow-hidden">
        <Navbar />
        <Home />
        <Featured/>
        <About />
        <Skills/>
        <Experience />
        <Projects />
        <Dashboards />
        <Contact/>
        <Footer />
        </div>
    </ThemeProvider>
  );
}

export default App;
