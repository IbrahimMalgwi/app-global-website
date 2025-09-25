// App.js
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import CoreValues from "./components/CoreValues";
import Services from "./components/Services";
import OurSubsidiaries from "./components/OurSubsidiaries";
import Team from "./components/Team";
import Partners from "./components/Partners";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeLayout from "./components/ThemeLayout";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        // Disable browser auto scroll on reload
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
    }, []);
    return (
        <ThemeLayout>
            <NavBar/>
            <section id="home"><Hero /></section>
            <section id="about"><About /></section>
            <section id="mission"><MissionVision/></section>
            <section id="values"><CoreValues /></section>
            <section id="services"><Services /></section>
            <section id="subsidiaries"><OurSubsidiaries /></section>
            <section id="team"><Team /></section>
            <section id="partners"><Partners /></section>
            <section id="blog"><Blog /></section>
            <section id="contact"><Contact /></section>
            <Footer />
        </ThemeLayout>
    );
}

export default App;
