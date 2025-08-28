import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

// ================= LOCAL IMAGES =================
import ceoImage from "../assets/images/ceo.jpeg";
import member1 from "../assets/images/abdul.png";
import member2 from "../assets/images/umar.png";
import member3 from "../assets/images/yusuf.png";
import member4 from "../assets/images/taiyo.png";
import member5 from "../assets/images/fatoba.png";
import member6 from "../assets/images/team.png";
import member7 from "../assets/images/team.png";
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
    backgroundImage: ceoImage, // we can reuse CEO photo as hero bg or replace with another
    socials: {
        linkedin: "https://linkedin.com/in/habib-yunusa",
        twitter: "https://twitter.com/habibyunusa"
    }
};

// ================= EXECUTIVE TEAM DATA =================
const executiveTeam = [
    {
        name: "TOYINBO ABDULJELIL",
        role: "Chief Operating Officer",
        image: member9,
        bio: "Expertise in ICT, management policy, networking, web development and data analytics with 5+ years of experience.",
        socials: { linkedin: "#" }
    },
    {
        name: "ABDULLAHI YUNUSA",
        role: "Chief Technology Officer",
        image: member1,
        bio: "Over 8 years of experience in database management, programming, and ICT solutions delivery.",
        socials: { linkedin: "#" }
    },
    {
        name: "UMAR AMINU",
        role: "Business Analyst",
        image: member2,
        bio: "Experienced Business Analyst with expertise in Database Management and ICT solutions.",
        socials: { linkedin: "#" }
    },
    {
        name: "SAMUEL AYODELE BELLO",
        role: "Business Support Lead",
        image: member4,
        bio: "8+ years of project management in software application deployment, Agile & AI prompt engineering.",
        socials: { linkedin: "#" }
    },
    {
        name: "MOMODU ISAH MOHAMMED",
        role: "Business Support Lead",
        image: member5,
        bio: "18 years of ICT experience in telecoms networking, power and fiber optics.",
        socials: { linkedin: "#" }
    },
    {
        name: "IBRAHIM GANA MALGWI",
        role: "Software Engineer",
        image: member6,
        bio: "Engineer specialized in Java, Python, PL/SQL, Cloud Engineering and DevOps automation.",
        socials: { linkedin: "#" }
    },
    {
        name: "OJETOKUN VICTOR",
        role: "DevSecOps Engineer",
        image: member7,
        bio: "Focus on healthcare IT, AWS certified, Kubernetes specialist.",
        socials: { linkedin: "#" }
    },
    {
        name: "Yusuff Saliu Adediran",
        role: "Chief Technology Office",
        image: member3,
        bio: "Engineer contributing to strategic innovation and compliance excellence.",
        socials: { linkedin: "#" }
    },
    {
        name: "Temitope Fatoba",
        role: "Head, Business Support",
        image: member5,
        bio: "Engineer with growing expertise in enterprise IT solutions and governance.",
        socials: { linkedin: "#" }
    },
    {
        name: "Taiwo Olaogun",
        role: "Chief Financial Officer (CFO)",
        image: member4,
        bio: "Engineer with growing expertise in enterprise IT solutions and governance.",
        socials: { linkedin: "#" }
    }
];

// ================= TEAM MEMBER CARD =================
const TeamMemberCard = ({ member, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
            className="group h-80 relative perspective-1000"
        >
            {/* Flip container */}
            <motion.div
                className="relative w-full h-full transition-all duration-700 transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front side */}
                <div
                    className="absolute inset-0"
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                    <div className="flex flex-col justify-center items-center h-full bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-6">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow"
                        />
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{member.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
                    </div>
                </div>

                {/* Back side */}
                <div
                    className="absolute inset-0"
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                    <div className="flex flex-col justify-between h-full bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700 text-white rounded-xl shadow-lg p-6">
                        {/* Scrollable Bio */}
                        <div className="overflow-y-auto pr-2 custom-scrollbar flex-1">
                            <p className="text-sm leading-relaxed">{member.bio}</p>
                        </div>
                        {/* Social Links */}
                        <div className="flex justify-center space-x-4 mt-4">
                            {member.socials?.twitter && (
                                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                                    <Twitter className="w-4 h-4" />
                                </a>
                            )}
                            {member.socials?.linkedin && (
                                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            )}
                            {member.socials?.github && (
                                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                                    <Github className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// ================= MAIN TEAM COMPONENT =================
export default function Team() {
    return (
        <>
            {/* CEO Hero Section */}
            <section id="team"  className="relative py-20 md:py-32 bg-gray-900 bg-cover bg-center">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* Left: CEO Image */}
                        <div className="flex justify-center">
                            <img
                                src={ceo.image}
                                alt={ceo.name}
                                className="rounded-xl shadow-2xl w-full max-w-md object-cover"
                            />
                        </div>

                        {/* Right: CEO Bio */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-white"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">
                                {ceo.name}, {ceo.title}
                            </h1>
                            <h2 className="text-xl md:text-2xl text-blue-200 mb-6">
                                {ceo.role}
                            </h2>
                            <hr className="max-w-md h-px bg-white opacity-60 mb-6" />
                            <p className="text-lg leading-relaxed mb-8">{ceo.bio}</p>
                            <a
                                href={ceo.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-lg font-medium border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition"
                            >
                                Read More →
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Executive Leadership */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Executive Leadership
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Our senior executives bring tremendous experience, visionary thinking and a shared commitment to innovation and excellence.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {executiveTeam.map((member, i) => (
                            <TeamMemberCard key={i} member={member} delay={i * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Styles */}
            <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.3); border-radius: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      `}</style>
        </>
    );
}
