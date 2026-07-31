import LogoGrid from "./LogoGrid";
import { partners } from "../data/partners";

export default function Partners() {
    return (
        <section id="partners">
            <LogoGrid
                title="Technology Partners"
                subtitle="Trusted Partners"
                description="We collaborate with leading global technology companies to deliver secure, scalable, and innovative digital solutions."
                items={partners}
            />
        </section>
    );
}