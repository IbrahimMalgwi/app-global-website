import logo from './logo.svg';
import  NavBar from"./components/NavBar"
import Hero from "./components/Hero";
import About from "./components/About"
import Blog from "./components/Blog";
import  Contact from "./components/Contact"
import Footer from "./components/Footer";
import LatestInsights from "./components/LatestInsights";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Team from "./components/Team"
import FAQ from "./components/FAQ"

function App() {
  return (
      <>
          <NavBar/>
          <Hero />
          <About />
          <Services />
          <Team />
          <Blog />
          <LatestInsights />
          <Partners />
          <FAQ />
          <Contact />
          <Footer />
      </>
  );
}

export default App;
