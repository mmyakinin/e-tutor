import { useState } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";

const NavbarBanner = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative bg-primary text-sm font-semibold text-center p-1 hidden lg:block"
            >
                <p>
                    Are you a university or school student for an online
                    tutoring partnership?
                    <a href="#" className="text-secondary ml-2">
                        Talk to us
                    </a>
                </p>
                <div
                    className="absolute top-1/2 right-10 -translate-y-1/2 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={18} />
                </div>
            </motion.div>
        )
    );
};

export default NavbarBanner;
