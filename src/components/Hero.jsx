import { Play } from "lucide-react";
import { motion } from "motion/react";

import heroImg from "./../assets/hero.png";

const Hero = () => {
    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
            {/* Info Section */}
            <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
                <div className="text-center md:text-left space-y-6">
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="font-semibold text-orange-600 uppercase"
                    >
                        100% Satisfaction Guarantee
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-5xl lg:text-6xl font-semibold !leading-tight"
                    >
                        Find Your Perfect{" "}
                        <span className="text-primary">Tutor</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="text-gray-600 xl:max-w-[500px]"
                    >
                        We help you find perfect tutor for 1-on-1 lessons. It is
                        completely free and private
                    </motion.p>
                    <motion.div
                        layout="position"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-8 md:justify-start !mt-8"
                    >
                        <button className="primary-btn">Get Started</button>
                        <button className="flex justify-center items-center gap-2 font-semibold">
                            <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                                <Play size={24} className="text-secondary" />
                            </span>
                            See how it works
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center">
                <motion.img
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    src={heroImg}
                    alt="Hero"
                    className="w-[350px] md:w-[550px] xl:w-[700px]"
                />
            </div>
        </div>
    );
};

export default Hero;
