import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

// ================= LOCAL IMAGES =================
import ceoImage from "../assets/images/ceo.jpeg";
import member1 from "../assets/images/abdul.png";
import member2 from "../assets/images/umar.png";
import member3 from "../assets/images/yusuf.jpeg";
import member4 from "../assets/images/taiyo.png";
import member5 from "../assets/images/fatoba.png";
import member6 from "../assets/images/adeboyin.png";
import member7 from "../assets/images/ibrahim.jpg";
import member8 from "../assets/images/ibrahim.jpg"; // new unique
import member9 from "../assets/images/team.png";

// ================= CEO DATA =================
const ceo = {
    name: "Habib Yunusa",
    title: "ENGR",
    role: "Chairman & Chief Executive",
    image: ceoImage,
    bio: `Habib Yunusa is the Chief Executive Officer of AppGlobal Technologies. 
He has been in the ICT sector for over 15 years with vast knowledge in Computing. 
Former faculty at NIIT, Certified Oracle DBA, and an experienced programmer. 
He has developed numerous application software and successfully delivered 
several ICT projects for both government and private sectors.

He attended Informatics Institution, Singapore where he obtained 
an International Advanced Diploma in Computing.`,
    socials: { linkedin: "https://linkedin.com/in/habib-yunusa" },
};

// ================= EXECUTIVE TEAM DATA =================
const executiveTeam = [
    {
        name: "TOYINBO ABDULJELIL",
        role: "Chief Operating Officer",
        image: member9,
        bio: "Expertise in Management policy, Human capital, and project management. 5+ years in ICT including Networking, Web Development, and Data Analytics.",
        socials: { linkedin: "#" },
    },
    {
        name: "ABDULLAHI YUNUSA",
        role: "Chief Technology Officer",
        image: member1,
        bio: "IT Manager with 5+ years experience. Expertise in Database Management and various programming languages.",
        socials: { linkedin: "#" },
    },
    {
        name: "UMAR AMINU",
        role: "Business Analyst",
        image: member2,
        bio: "Database Management expert with 8+ years delivering ICT solutions to organizations.",
        socials: { linkedin: "#" },
    },
    {
        name: "SAMUEL AYODELE BELLO",
        role: "Project Manager",
        image: member4,
        bio: "IT Manager with 5+ years experience. Project Manager for 8 years managing software development projects.",
        socials: { linkedin: "#" },
    },
    {
        name: "MOMODU ISAH MOHAMMED",
        role: "Telecoms Lead",
        image: member5,
        bio: "18+ years in telecoms Networking, power, and fiber optics. Strong background in IT systems and infrastructure.",
        socials: { linkedin: "#" },
    },
    {
        name: "ADETUNJI ADEBOYIN MOTUNRAYO",
        role: "Chief Financial Officer",
        image: member6,
        bio: "Financial Manager with 5+ years experience. Expertise in accounting, tax coordination, and financial reporting.",
        socials: { linkedin: "#" },
    },
    {
        name: "IBRAHIM GANA MALGWI",
        role: "Software Engineer",
        image: member7,
        bio: "Software Engineer with expertise in Java, Python, PL/SQL, and Cloud Engineering.",
        socials: { linkedin: "#" },
    },
    {
        name: "OJETOKUN VICTOR",
        role: "DevSecOps Engineer",
        image: member8,
        bio: "Machine Integration and DevSecOps Engineer with focus on healthcare and enterprise IT systems.",
        socials: { linkedin: "#" },
    },
    {
        name: "YUSUFF SALIU ADEDIRAN",
        role: "Chief Technology Strategist",
        image: member3,
        bio: "Seasoned technology executive with 10+ years in fintech industry. Expertise in Java, PL/SQL, and REST APIs.",
        socials: { linkedin: "#" },
    },
    {
        name: "TEMITOPE FATOBA",
        role: "Head, Business Support",
        image: member5,
        bio: "Financial services professional with 10+ years experience in international and commercial banks.",
        socials: { linkedin: "#" },
    },
    {
        name: "TAIWO OLAOGUN",
        role: "Finance & Internal Controls",
        image: member4,
        bio: "Accountant, Tax consultant, and Internal control manager with experience across multiple industries.",
        socials: { linkedin: "#" },
    },
];

// ================= TEAM MEMBER CARD =================
const TeamMemberCard = ({ member, delay }) => {
    const { theme } = useTheme();

    // Consistent color scheme for both sides
    const cardColor = theme === "light" ? "#f8fafc" : "#1e293b";
    const textColor = theme === "light" ? "#1e293b" : "#f1f5f9";
    const accentColor = theme === "light" ? "#3b82f6" : "#60a5fa";
    const hoverColor = theme === "light" ? "#e2e8f0" : "#334155";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full h-96"
        >
            <div
                className="relative w-full h-full group transition-transform duration-500 rounded-xl"
                style={{ perspective: "1000px" }}
            >
                <div
                    className="relative w-full h-full transition-transform duration-500 rounded-xl"
                    style={{
                        transformStyle: "preserve-3d",
                        transition: "transform 0.6s"
                    }}
                >
                    {/* Front side */}
                    <div
                        className="absolute inset-0 flex flex-col justify-between rounded-xl shadow-lg overflow-hidden p-4"
                        style={{
                            backfaceVisibility: "hidden",
                            background: cardColor,
                            color: textColor,
                            border: `2px solid ${accentColor}20`,
                        }}
                    >
                        <div className="flex-1 flex items-center justify-center pt-4 px-4">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="max-w-full max-h-48 object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="mt-4 text-center p-3 rounded-lg w-full">
                            <h3 className="font-semibold text-lg" style={{ color: accentColor }}>
                                {member.name}
                            </h3>
                            <p className="text-sm opacity-80">{member.role}</p>
                        </div>
                    </div>

                    {/* Back side */}
                    <div
                        className="absolute inset-0 flex flex-col p-6 rounded-xl shadow-lg"
                        style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            background: cardColor,
                            color: textColor,
                            border: `2px solid ${accentColor}20`,
                        }}
                    >
                        <h3 className="font-semibold text-lg mb-2 text-center" style={{ color: accentColor }}>
                            {member.name}
                        </h3>
                        <p className="text-sm opacity-80 text-center mb-4">{member.role}</p>

                        <div className="flex-1 overflow-y-auto pr-2 mb-4">
                            <p className="text-sm leading-relaxed">{member.bio}</p>
                        </div>

                        {member.socials?.linkedin && (
                            <a
                                href={member.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full mx-auto transition-colors"
                                style={{ backgroundColor: hoverColor }}
                                aria-label={`Connect with ${member.name} on LinkedIn`}
                            >
                                <Linkedin className="w-5 h-5" style={{ color: accentColor }} />
                            </a>
                        )}
                    </div>
                </div>

                {/* CSS for flip animation */}
                <style jsx>{`
                    .group:hover > div {
                        transform: rotateY(180deg);
                    }
                `}</style>
            </div>
        </motion.div>
    );
};

// ================= MAIN TEAM COMPONENT =================
export default function Team() {
    const [showFullBio, setShowFullBio] = useState(false);
    const { theme } = useTheme();
    const shortBio = ceo.bio.split("\n\n")[0];

    const teamMembers = useMemo(
        () =>
            executiveTeam.map((member, i) => (
                <TeamMemberCard key={`${member.name}-${i}`} member={member} delay={i * 0.1} />
            )),
        []
    );

    // Colors for CEO section
    const ceoTextColor = theme === "light" ? "#1e293b" : "#f1f5f9";
    const ceoBgColor = theme === "light" ? "#e2e8f0" : "#0f172a";
    const ceoAccentColor = theme === "light" ? "#3b82f6" : "#60a5fa";

    return (
        <>
            {/* CEO Hero Section */}
            <section id="team" className="relative py-20 md:py-32" style={{ background: ceoBgColor }}>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* CEO Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center"
                        >
                            <img
                                src={ceo.image}
                                alt={ceo.name}
                                className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg object-cover"
                            />
                        </motion.div>

                        {/* CEO Bio */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ color: ceoTextColor }}
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                                {ceo.name}, {ceo.title}
                            </h1>
                            <h2 className="text-xl md:text-2xl mb-6" style={{ color: ceoAccentColor }}>
                                {ceo.role}
                            </h2>
                            <hr className="max-w-md h-px mb-8 opacity-30" />

                            <div className="space-y-4 mb-8">
                                {showFullBio
                                    ? ceo.bio.split("\n\n").map((p, i) => (
                                        <p key={i} className="text-base md:text-lg leading-relaxed">
                                            {p}
                                        </p>
                                    ))
                                    : (
                                        <p className="text-base md:text-lg leading-relaxed">{shortBio}</p>
                                    )}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <button
                                    onClick={() => setShowFullBio(!showFullBio)}
                                    className="text-base md:text-lg font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
                                    style={{
                                        backgroundColor: ceoAccentColor,
                                        color: "#fff",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.opacity = 0.9;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.opacity = 1;
                                    }}
                                >
                                    {showFullBio ? "Read Less" : "Read More →"}
                                </button>

                                {ceo.socials?.linkedin && (
                                    <a
                                        href={ceo.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-12 h-12 rounded-full transition-colors"
                                        style={{ backgroundColor: ceoAccentColor }}
                                        aria-label="Connect with CEO on LinkedIn"
                                    >
                                        <Linkedin className="w-6 h-6 text-white" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Executive Team Grid */}
            <section className="py-20 md:py-32" style={{ background: theme === "light" ? "#f1f5f9" : "#0f172a" }}>
                <div className="container mx-auto px-4 md:px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-center mb-12"
                        style={{ color: theme === "light" ? "#1e293b" : "#f1f5f9" }}
                    >
                        Executive Team
                    </motion.h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {teamMembers}
                    </div>
                </div>
            </section>
        </>
    );
}