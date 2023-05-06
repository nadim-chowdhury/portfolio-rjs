import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="mx-4 sm:max-w-4xl sm:mx-auto">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
