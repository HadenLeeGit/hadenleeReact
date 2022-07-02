import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import "./App.css";
import {Home} from "./pages/home";
import {Projects} from "./pages/projects";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import {About} from "./components/about";
import {Project1} from "./pages/project1/project1";
import {Project2} from "./pages/project2/project2";

function App() {
  return (
      <div>
        <Navigation />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/1" element={<Project1 />} />
          <Route path="/projects/2" element={<Project2 />} />

        </Routes>
        <Footer />
      </div>
  );
}

export default App;
