import { motion } from "motion/react";

const Banner = ({ imgUrl, title, desc, tag, reverse }) => {
    return (
        <section className="bg-[#f9f9f9] py-8 md:py-16">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
                    {/* Banner Image Section */}
                    <div
                        className={`flex justify-center md:justify-start items-center undefined ${
                            reverse && "md:order-last md:justify-end"
                        }`}
                    >
                        <motion.img
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                delay: 0.2,
                            }}
                            viewport={{ once: true }}
                            src={imgUrl}
                            alt={title}
                            className="w-[400px] h-full object-cover"
                        />
                    </div>
                    {/* Banner Text Section */}
                    <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="text-sm text-orange-600 font-semibold capitalize font-playfair"
                        >
                            {tag}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="text-xl lg:text-2xl font-semibold capitalize font-playfair"
                        >
                            {title}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            viewport={{ once: true }}
                            className="text-sm text-slate-500"
                        >
                            {desc}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                            viewport={{ once: true }}
                            className="flex justify-center md:justify-start overflow-hidden"
                        >
                            <button className="primary-btn mt-5">
                                Get Started
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
