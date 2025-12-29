import { useState } from "react";
import { motion } from "motion/react";
import { LaptopMinimal, Menu, X } from "lucide-react";
import { NavbarMenu } from "../mockData/data";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="container flex justify-between items-center py-4">
                    {/* Logo Section */}
                    <div className="text-2xl flex items-center gap-2 font-bold">
                        <LaptopMinimal size={36} className="text-secondary" />
                        <p>E-Tutor</p>
                    </div>

                    {/* Menu Section */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-6">
                            {NavbarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a
                                            href={item.link}
                                            className="inline-block text-gray-600 font-semibold text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex items-center gap-6">
                        <button className="font-semibold hidden lg:block">
                            Sign In
                        </button>
                        <button className="font-semibold text-white bg-secondary px-6 py-2 rounded-full hidden lg:block">
                            Register
                        </button>
                    </div>

                    {/* Mobile Navbar Section */}
                    <div
                        className="lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {!isOpen ? <Menu size={36} /> : <X size={36} />}
                    </div>
                </div>
            </motion.nav>
            <MobileMenu isOpen={isOpen} />
        </>
    );
};

export default Navbar;
