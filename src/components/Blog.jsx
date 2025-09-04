import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subscribed with:", email);
        setIsSubscribed(true);
        setEmail("");

        setTimeout(() => setIsSubscribed(false), 3000);
    };

    return (
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Get the latest news on digital healthcare, fintech innovations, and sustainable energy solutions
                    </p>
                </div>

                {/* Newsletter Form */}
                <div className="max-w-md mx-auto">
                    {isSubscribed ? (
                        <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                            <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <p className="text-white font-medium">Thank you for subscribing!</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubscribe} className="flex gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-blue-200
                         focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50
                         transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
                            >
                                Subscribe
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    )}
                </div>

                {/* Privacy Note */}
                <p className="text-blue-200/80 text-sm text-center mt-4">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
}