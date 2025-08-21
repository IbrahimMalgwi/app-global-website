import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Blog() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // 👉 Add your newsletter API integration here
        console.log("Subscribed with:", email);
        setEmail("");
    };

    return (
        <section className="py-20 bg-gradient-to-br from-blue-600 to-violet-600 relative overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl font-bold mb-6 text-white">Stay Updated</h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Subscribe to our newsletter for the latest updates on digital
                        healthcare, fintech innovations, and sustainable energy solutions
                    </p>
                </motion.div>

                {/* Newsletter Form */}
                <motion.form
                    onSubmit={handleSubscribe}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email address"
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background
                file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1
                bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium
                ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                h-10 py-2 bg-white text-blue-600 hover:bg-blue-50 px-8"
                        >
                            Subscribe
                            <Send className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
