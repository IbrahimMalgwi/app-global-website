import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import CoreValues from "./components/CoreValues";
import Services from "./components/Services";
// import OurSubsidiaries from "./components/OurSubsidiaries";
import Team from "./components/Team";
import Partners from "./components/Partners";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeLayout from "./components/ThemeLayout";

function App() {
    return (
        <ThemeLayout>
            <NavBar/>
            <Hero />
            <About />
            <MissionVision/>
            <CoreValues />
            <Services />
            {/*<OurSubsidiaries />*/}
            <Team />
            <Partners />
            <Blog />
            <Contact />
            <Footer />
        </ThemeLayout>
    );
}

export default App;