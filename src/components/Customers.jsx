import LogoGrid from "./LogoGrid";
import { customers } from "../data/customers";

export default function Customers() {
    return (
        <section id="customers">
            <LogoGrid
                title="Trusted Customers"
                subtitle="Our Customers"
                description="Healthcare organizations and institutions that trust AppGlobal Technologies to power their digital transformation."
                items={customers}
            />
        </section>
    );
}