import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nosotros from "./Pages/Nosotros";
import Desarrollo from "./Pages/Desarrollo";
import Financiamiento from "./Pages/Financiamiento";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Nosotros />} path="/nosotros" />
        <Route element={<Desarrollo />} path="/desarrollo" />
        <Route element={<Financiamiento />} path="/financiamiento" />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
