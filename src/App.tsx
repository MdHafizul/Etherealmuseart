import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import Home from "@/pages/Home";
import Works from "@/pages/Works";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <SplashScreen />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
