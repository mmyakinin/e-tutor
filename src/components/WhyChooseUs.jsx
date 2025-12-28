import { motion } from "motion/react";
import { Backpack, Dumbbell, GraduationCap, HandCoins } from "lucide-react";

const WhyChooseUsData = [
    {
        id: 1,
        title: "One-on-one Teaching",
        desc: "All of our special education experts have a degree in special education.",
        icon: <GraduationCap />,
        bgColor: "#0036ff",
        delay: 0.3,
    },
    {
        id: 2,
        title: "24/7 Tutor Availability",
        desc: "Our tutors are always available to respond as quick as possible for you",
        icon: <Dumbbell />,
        bgColor: "#73bc00",
        delay: 0.6,
    },
    {
        id: 3,
        title: "Interactive Whiteboard",
        desc: "Our digital whiteboard equipped with audio and video chat fetures.",
        icon: <Backpack />,
        bgColor: "#fa4400",
        delay: 0.9,
    },
    {
        id: 4,
        title: "Affordable Prices",
        desc: "Choose an expert tutor based on your budget and per hour.",
        icon: <HandCoins />,
        bgColor: "#fe6baa",
        delay: 1.2,
    },
];

const WhyChooseUs = () => {
    return (
        <div className="bg-[#f9fafc]">
            <div className="container py-16">
                {/* Header Section */}
                <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
                    <h1 className="uppercase font-semibold text-orange-600">
                        Why Choose us
                    </h1>
                    <p className="font-semibold text-3xl ">
                        Benefits of online tutoring services with us
                    </p>
                </div>
                {/* Card Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {WhyChooseUsData.map((item) => (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: item.delay }}
                            key={item.id}
                            className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
                        >
                            <div
                                className={`w-10 h-10 rounded-lg flex justify-center items-center text-white`}
                                style={{ backgroundColor: item.bgColor }}
                            >
                                <div className="text-2xl">{item.icon}</div>
                            </div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
