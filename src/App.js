// App.js
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
// import CoreValues from "./components/CoreValues";
import Services from "./components/Services";
import OurSubsidiaries from "./components/OurSubsidiaries";
import Team from "./components/Team";
import Partners from "./components/Partners";
import Customers from "./components/Customers";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeLayout from "./components/ThemeLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
    return (
        <ErrorBoundary>
            <ThemeProvider>
                <ThemeLayout>
                    <NavBar />
                    <Hero />
                    <About />
                    <MissionVision />
                    <OurSubsidiaries />
                    <Services />
                    <Team />
                    <Customers />
                    <Partners />
                    <FAQ />
                    <Contact />
                    <Footer />
                </ThemeLayout>
            </ThemeProvider>
        </ErrorBoundary>
    );
}

export default App;
