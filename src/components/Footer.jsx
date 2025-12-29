import {
    LaptopMinimal,
    MapPin,
    Instagram,
    Facebook,
    Linkedin,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#f9f9f9]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 border-t-2 border-gray-300/10">
                    <div className="py-8 px-4 space-y-4">
                        <div className="text-2xl flex items-center gap-2 font-bold">
                            <LaptopMinimal
                                size={36}
                                className="text-secondary"
                            />
                            <p>E-Tutor</p>
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ab placeat quaerat doloribus odit perferendis
                            autem blanditiis, nihil pariatur iusto accusamus.
                        </p>
                        <div className="flex items-center justify-start gap-5 !mt-6">
                            <a
                                href="#"
                                className="hover:text-secondary duration-200"
                            >
                                <MapPin size={30} />
                            </a>
                            <a
                                href="#"
                                className="hover:text-secondary duration-200"
                            >
                                <Instagram size={30} />
                            </a>
                            <a
                                href="#"
                                className="hover:text-secondary duration-200"
                            >
                                <Facebook size={30} />
                            </a>
                            <a
                                href="#"
                                className="hover:text-secondary duration-200"
                            >
                                <Linkedin size={30} />
                            </a>
                        </div>
                    </div>
                    <div className="py-8 px-4">
                        <h3 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                            Important Links
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-secondary duration-20"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-secondary duration-20"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-secondary duration-20"
                                >
                                    Services
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="py-8 px-4">
                        <h3 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                            Resources
                        </h3>

                        <ul className="flex flex-col gap-3">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-secondary duration-20"
                                >
                                    Our Servies
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-secondary duration-20"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-secondary duration-20"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="text-center py-6 border-t-2 border-gray-300/50">
                        <span className="text-sm text-gray-500">
                            Made by Maksim Myakinin
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
