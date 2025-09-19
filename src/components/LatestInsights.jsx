//src/components/LatestInsights.jsx
import { motion } from "framer-motion";
import { Calendar, User, ArrowUpRight } from "lucide-react";
import AIHealthcareImage from "../assets/images/ai-healthcare-blog.png";
import EHRInteroperabilityImage from "../assets/images/ehr-interoperability-blog.png";
import SmartGridImage from "../assets/images/smart-grid-blog.png";

const insights = [
    {
        category: "Healthcare Technology",
        date: "December 15, 2024",
        author: "HABIB YUNUSA",
        title: "The Future of AI in Healthcare: Transforming Patient Care",
        description:
            "Discover how artificial intelligence is revolutionizing healthcare delivery, from predictive analytics to personalized treatment plans. Our latest insights reveal the transformative power of AI-driven medical solutions.",
        image: AIHealthcareImage
    },
    {
        category: "Digital Health",
        date: "December 10, 2024",
        author: "TOYINBO ABDULJELIL",
        title: "Interoperability in EHR Systems: Breaking Down Data Silos",
        description:
            "Learn how modern EHR systems are enabling seamless data exchange across healthcare networks. We explore the challenges and solutions in creating truly connected healthcare ecosystems.",
        image: EHRInteroperabilityImage,
    },
    {
        category: "Clean Energy",
        date: "December 5, 2024",
        author: "ABDULLAHI YUNUSA",
        title: "Sustainable Energy Solutions: Smart Grids for Tomorrow",
        description:
            "Explore the latest innovations in smart grid technology and sustainable energy management. Our comprehensive guide covers the future of clean energy infrastructure and connected systems.",
        image: SmartGridImage,
    },
];

export default function LatestInsights() {
    return (
        <section
            id="blog"
            className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative"
        >
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
                        Latest Insights
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Stay informed with our latest thoughts on healthcare technology, AI
                        innovations, and digital transformation
                    </p>
                </motion.div>

                {/* Blog grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {insights.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="group"
                        >
                            <div className="rounded-lg text-card-foreground h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                {/* Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-600 text-white">
                                            {post.category}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-300 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-4 h-4" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        {post.description}
                                    </p>

                                    <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-input h-10 px-4 py-2 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        Read More
                                        <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
