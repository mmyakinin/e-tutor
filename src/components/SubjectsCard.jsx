import { motion } from "motion/react";
import { NotebookPen } from "lucide-react";

const subjectsList = [
    {
        id: 1,
        name: "Front-End",
        icon: NotebookPen,
        color: "#0063ff",
        delay: 0.2,
    },
    {
        id: 2,
        name: "Back-End",
        icon: NotebookPen,
        color: "#00c986",
        delay: 0.3,
    },
    {
        id: 3,
        name: "Full-Stack",
        icon: NotebookPen,
        color: "#922aee",
        delay: 0.4,
    },
    {
        id: 4,
        name: "Python",
        icon: NotebookPen,
        color: "#ea7516",
        delay: 0.5,
    },
    {
        id: 5,
        name: "Java",
        icon: NotebookPen,
        color: "#F5E727",
        delay: 0.6,
    },
    {
        id: 6,
        name: "C / C++",
        icon: NotebookPen,
        color: "#51438A",
        delay: 0.7,
    },
    {
        id: 7,
        name: "SQL Database",
        icon: NotebookPen,
        color: "#27C2F5",
        delay: 0.8,
    },
    {
        id: 8,
        name: "UI / UX Design",
        icon: NotebookPen,
        color: "#ED396F",
        delay: 0.9,
    },
];

const SubjectsCard = () => {
    return (
        <>
            <div className="container py-16">
                {/* Header Section */}
                <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
                    <h1 className="uppercase font-semibold text-orange-600">
                        Our tutor subjects
                    </h1>
                    <p className="font-semibold text-3xl ">
                        Find Online Tutor in Any Subject
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {subjectsList.map((item) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -200 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    delay: item.delay,
                                }}
                                className="border rounded-lg border-secondary/20 p-4 flex items-center gap-4 hover:scale-105 hover:shadow-xl duration-200 cursor-pointer"
                            >
                                <div
                                    className="w-10 h-10 rounded-md flex justify-center items-center"
                                    style={{
                                        backgroundColor: item.color + "20",
                                    }}
                                >
                                    <Icon size={24} color={item.color} />
                                </div>
                                <p className="font-medium">{item.name}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default SubjectsCard;
