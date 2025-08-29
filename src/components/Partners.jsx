import { motion } from "framer-motion";
import awsLogo from "../assets/images/aws-logo.png";
import googleCloudLogo from "../assets/images/google-cloud-logo.png";
import ibmLogo from "../assets/images/ibm-logo.png";
import microsoftLogo from "../assets/images/microsoft-logo.png";
import oracleLogo from "../assets/images/oracle-logo.png";
import salesforceLogo from "../assets/images/salesforce-logo.png";
import ebute from "../assets/images/ebute.png";
import ikorodu from "../assets/images/ikorodu.png";
import inewi from "../assets/images/inewi.png";
import national from "../assets/images/national.png";
import eksuth from "../assets/images/eksuth.png";
import  fmcgusau from "../assets/images/fmcgusau.png";
import yaba from "../assets/images/fnph.png";

export default function Partners() {
    const partners = [
        { name: "Microsoft", logo: microsoftLogo },
        { name: "AWS", logo: awsLogo },
        { name: "Google Cloud", logo: googleCloudLogo },
        { name: "IBM", logo: ibmLogo },
        { name: "Oracle", logo: oracleLogo },
        { name: "Salesforce", logo: salesforceLogo },
        { name: "Ebute", logo: ebute },
        { name: "Ikorodu", logo: ikorodu },
        { name: "Inewi", logo: inewi },
        { name: "National", logo: national },
        { name: "Eksuth", logo: eksuth },
        { name: "FMC Gusau", logo: fmcgusau },
        { name: "Yaba", logo: yaba },
    ];

    return (
        <section id="partners" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        Our Partners &amp; Clients
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Trusted by leading organizations worldwide
                    </p>
                </motion.div>

                {/* Logos */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {partners.map((partner, i) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
