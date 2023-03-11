import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";
import { GlobalStyles } from "../components/styles/GlobalStyles";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="./" element={<Home />} />
        <Route path="./about" element={<About />} />
        <Route path="./sevices" element={<Services />} />
        <Route path="./contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
      <About />
    </BrowserRouter>
  );
};

export default AppRouter;
