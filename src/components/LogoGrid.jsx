import { motion } from "framer-motion";

export default function LogoGrid({
                                     title,
                                     subtitle,
                                     description,
                                     items,
                                 }) {
    return (
        <section className="relative py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <p className="text-red-600 font-semibold uppercase tracking-wider mb-3">
                        {subtitle}
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        {title}
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        {description}
                    </p>
                </motion.div>

                {/* Logos */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.05,
                            }}
                            whileHover={{
                                y: -6,
                                scale: 1.04,
                            }}
                            className="group"
                        >
                            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center justify-center h-48">
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="max-h-16 w-auto object-contain transition duration-300 grayscale group-hover:grayscale-0"
                                />

                                <h3 className="mt-6 text-center font-semibold text-gray-800 dark:text-white">
                                    {item.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}