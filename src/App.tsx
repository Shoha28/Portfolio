import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Skills from "./components/Skills/Skills";
import BackToTop from "./components/BackToTop/BackToTop";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Header></Header>
      <About></About>
      <Works></Works>
      <Skills></Skills>
      <BackToTop></BackToTop>
      <Contact></Contact>
    </>
  );
}
