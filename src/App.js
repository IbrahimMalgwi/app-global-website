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
import ThemeLayout from "./components/ThemeLayout";
import CoreValues from "./components/CoreValues";



function App() {
  return (
      <ThemeLayout>
          <NavBar/>
          <Hero />
          <About />
          <CoreValues />
          <Services />
          <Team />
          <Blog />
          <LatestInsights />
          <Partners />
          <Contact />
          <Footer />
      </ThemeLayout>
  );
}

export default App;
