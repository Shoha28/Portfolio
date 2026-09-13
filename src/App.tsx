import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Skills from "./components/Skills/Skills";
import BackToTop from "./components/BackToTop/BackToTop";
export default function App() {
  return (
    <>
      <Navbar />
      <Header></Header>
      <About></About>
      <Works></Works>
      <Skills></Skills>
      <BackToTop></BackToTop>
    </>
  );
}
