import { motion, AnimatePresence } from "framer-motion";

// import { motion,  } from "framer-motion";
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
        bio: "his area of expertise and experience cut across Management policy both Human capital and company project managing. I am knowledgeable in ICT as well, which has been relevant for over 5 years. Area of expertise includes Computer Networking, Maintenance, Web Development and Data Analyst among which are; CSS, HTML, and Software such as; Microsoft Suite, Adobe Suite, Dreamweaver (CS3, CS4 and CS5). Power BI\n" +
            "\n" +
            "He holds a HND Public Administration (Nuhu Bamali Polytechnic, Zaria) 2012, Diploma in Computer Networking & Maintenance, Diploma in Web Design & Development and Diploma in Data Science & Data Analytics",
        socials: { linkedin: "#" }
    },
    {
        name: "ABDULLAHI YUNUSA",
        role: "Chief Technology Officer",
        image: member1,
        bio: "He has worked as an IT Manager with over 5 years’ experience in ICT field.  and his area of expertise is Database Management. He has been delivering ICT solutions to several organizations for over 8 years.\n" +
            "\n" +
            "His area of expertise includes Computing and Programming Languages, among which are; Oracle APEX, C++, PHP, CSS, HTML, and Java Script and Software such as; Microsoft Suite, Adobe Suite, Dreamweaver (CS3, CS4 and CS5), and MySQL\n" +
            "He holds HND in Computer Science (Kaduna Polytechnic), 2018",
        socials: { linkedin: "#" }
    },
    {
        name: "UMAR AMINU",
        role: "Business Analyst",
        image: member2,
        bio: "His area of expertise is Database Management. He has been delivering ICT solutions to several organizations for over 8 years.\n" +
            "\n" +
            "He holds a B. Tech in Computer Science from ATBU, Bauchi and PGD in Computer Science from Bayero University Kano.",
        socials: { linkedin: "#" }
    },
    {
        name: "SAMUEL AYODELE BELLO",
        role: "Business Support Lead",
        image: member4,
        bio: "He has worked as an IT Manager with over 5 years’ experience in ICT field.\n" +
            "\n" +
            "His area of expertise and experience in Project Manager for 8 years and has managed several projects on Software Applications Development and Deployment for both government and private sectors. \n" +
            "With adequate experience in the application of both Waterfall and Agile Project Management methodologies, Business Analysis, Scrum Master, Product Management, Data Analytics, and AI Prompt Engineering.\n" +
            "He Holds MBA in Project Management (ACU), BSc. Ed. Human Kinetics (UNILORIN), National Diploma in Accounting (NASPOLY)",
        socials: { linkedin: "#" }
    },
    {
        name: "MOMODU ISAH MOHAMMED",
        role: "Business Support Lead",
        image: member5,
        bio: "He has worked as an IT Manager with over 5 years’ experience in ICT field.\n" +
            "His area of expertise includes ICT for over 18 years with core experience on telecoms Networking, power, fiber optics amongst others. He has executed several projects on telecoms & Automation for both Banks, government and private sectors\n" +
            "He Holds HND. Mechanical Engineering (Power/Plant Option) from Federal Polytechnic Kaduna.\n" +
            "Oracle Certify OCA&OCP 10g database, Digital marketing Skill, PGD-Mechatronic Engineering",
        socials: { linkedin: "#" }
    },
    {
        name: "Adetunji Adeboyin Motunrayo ",
        role: "Chief Financial Officer",
        image: member6,
        bio: "she has worked as an financial Manager with over 5 years’ experience.\n" +
            "\n" +
            "Her area of expertise includes in the financial sector as an Accountant for over 5 years with core experience in reconciliation of financial statement, Coordinating all forms of taxes both state and federal level, Monthly presentation of financial report, salary payment\n" +
            "She Holds BSC. Accounting (National Open University of Nigeria)",
        socials: { linkedin: "#" }
    },
    {
        name: "IBRAHIM GANA MALGWI",
        role: "Software Engineer",
        image: member6,
        bio: "A Software Engineer with strong expertise in Java, Python, PL/SQL, and Cloud Engineering, with a dynamic career built across the Technology and Enterprise Solutions sectors. He has contributed to key engineering roles at Semicolon Africa and currently at AppGlobal Technologies, where he is involved in designing and deploying scalable software systems.\n" +
            "\n" +
            "He holds a proven track record in developing robust applications, managing cloud infrastructure, and integrating enterprise-level platforms. His focus on performance, security, and innovation supports the company’s mission to deliver cutting-edge digital solutions.",
        socials: { linkedin: "#" }
    },
    {
        name: "OJETOKUN VICTOR",
        role: "DevSecOps Engineer",
        image: member7,
        bio: "Machine Integration and DevSecOps Engineer with a focus on bridging healthcare and enterprise IT through secure, scalable systems. He holds certifications as an AWS Cloud Practitioner and Kubernetes & Cloud Native Associate, applying his expertise in cloud-native architectures, container orchestration, CI/CD pipelines, and healthcare data interoperability. At App Global Technologies Ltd, he has led the successful deployment and integration of PACS and LIS systems across key medical institutions in Nigeria, enhancing medical imaging and laboratory workflows through secure and automated infrastructure.",
        socials: { linkedin: "#" }
    },
    {
        name: "Yusuff Saliu Adediran",
        role: "Chief Technology Office",
        image: member3,
        bio: " seasoned technology executive with over 10 years of experience in the fintech industry. Currently serving as the Chief Technology Officer (CTO) in AppGlobal Payment Limited Lagos, Nigeria, he leads cross-functional teams in delivering secure, scalable, and customer-focused digital financial solutions.\n" +
            "With a solid foundation in Java, PL/SQL, Spring Boot, and REST APIs, Yusuff specializes in building high-performance backend systems and enterprise-grade architectures. His hands-on leadership style bridges technical vision with strategic execution, enabling product innovation and business growth.",
        socials: { linkedin: "#" }
    },
    {
        name: "Temitope Fatoba",
        role: "Head, Business Support",
        image: member5,
        bio: "result-driven, innovative, and detail-oriented professional with over a decade of experience in the financial services industry, working with international and Tier 1 commercial banks in Nigeria. \n" +
            "Temitope is skilled at building and maintaining strong client relationships, as well as leading cross-functional teams to enhance operational efficiency and client satisfaction. \n" +
            "Temitope has consistently demonstrated leadership, managing high-performing teams, achieving top regulatory audit ratings, and significantly growing customer bases. His experience spans roles from General Transactions Officer and Clearing Representative to Assistant Branch Manager and Branch Manager, as well as consultancy positions where he provided financial advisory services and conducted operational audits. His career accomplishments reflect his commitment to excellence. \n" +
            "He holds a Master of Business Administration (MBA) from the Lagos Business School, Pan-Atlantic University, and a Bachelor of Science in Biochemistry from Olabisi Onabanjo University. Additionally, Temitope also has intermediate proficiency in French.",
        socials: { linkedin: "#" }
    },
    {
        name: "Taiwo Olaogun",
        role: "Chief Financial Officer (CFO)",
        image: member4,
        bio: "An Accountant, A Tax consultant and, An Internal control and compliance manager with a distinguish career earned from the industry of Entertainment, Logistics and Construction. She led senior positions in Feminik Logistics Limited and Toro entertainment Company. She holds a bachelor of science degree in Accounting and Finance from the University of Bestower International, Benin; Higher National diploma in Accounting from Yaba college of Technology, and she is a member of The institute of chartered accountants of Nigeria (ICAN), a member of the Corporate Finance Institutite(CFI), and a member of Chartered Institute of Taxation of Nigeria (CITN).",
        socials: { linkedin: "#" }
    }
];

// ================= TEAM MEMBER CARD =================

const TeamMemberCard = ({ member, delay }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative w-full min-h-[22rem] perspective-1000"
            >
                {/* Flip container */}
                <motion.div
                    className="relative w-full h-full"
                    style={{ transformStyle: "preserve-3d" }}
                    whileHover={{ rotateY: 180, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                >
                    {/* Front side */}
                    <div
                        className="absolute inset-0 flex flex-col justify-center items-center rounded-xl shadow-xl
                       bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6
                       transform-gpu hover:shadow-2xl transition-shadow duration-500"
                        style={{
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                        }}
                    >
                        <motion.img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
                            whileHover={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 0.6 }}
                        />
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white text-center">
                            {member.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                            {member.role}
                        </p>
                    </div>

                    {/* Back side */}
                    <div
                        className="absolute inset-0 flex flex-col rounded-xl shadow-xl
                       bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700 text-white p-6"
                        style={{
                            transform: "rotateY(180deg)",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                        }}
                    >
                        {/* Scrollable Bio with fade mask */}
                        <div className="relative flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            <p className="text-sm leading-relaxed">{member.bio}</p>
                            <div className="absolute bottom-0 left-0 right-0 h-8
                              bg-gradient-to-t from-purple-700/90 to-transparent pointer-events-none" />
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-4 mt-4">
                            {member.socials?.twitter && (
                                <a
                                    href={member.socials.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center
                             hover:bg-white/30 transition-colors"
                                >
                                    <Twitter className="w-4 h-4" />
                                </a>
                            )}
                            {member.socials?.linkedin && (
                                <a
                                    href={member.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center
                             hover:bg-white/30 transition-colors"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            )}
                            {member.socials?.github && (
                                <a
                                    href={member.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center
                             hover:bg-white/30 transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
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
