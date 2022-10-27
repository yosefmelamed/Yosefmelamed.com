import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
export default function Routes1() {
  return (
    <>
      <Routes>
        <Route exact="true" path="/Home" element={<Home />}></Route>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/About" element={<About />}></Route>
        <Route path="/Portfolio" element={<Portfolio />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}