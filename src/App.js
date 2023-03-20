//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
//import Projects from "./pages/Projects";
//import Experience from "./pages/Experience";
//import Bildung from "./pages/Bildung";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Contact from "./pages/Contact";
//import ProjectDisplay from "./pages/ProjectDisplay";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
