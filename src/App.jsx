import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NavbarBanner from "./components/NavbarBanner";
import NumberCounter from "./components/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs";
import Banner from "./components/Banner";
import SubjectsCard from "./components/SubjectsCard";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

import bannerImg1 from "./assets/banner1.png";
import bannerImg2 from "./assets/banner2.png";

const BannerData = [
    {
        tag: "CUSTOMIZE WITH YOUR SCHEDULE",
        title: "Personalized Professional Online Tutor on Your Schedule",
        desc: "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
        imgUrl: bannerImg1,
    },
    {
        tag: "CUSTOMIZE WITH YOUR SCHEDULE",
        title: "Talented and Qualified Tutors to Serve You for Help",
        desc: "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
        imgUrl: bannerImg2,
    },
];

const App = () => {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <NavbarBanner />
            <Hero />
            <NumberCounter />
            <WhyChooseUs />
            <Banner {...BannerData[0]} />
            <Banner {...BannerData[1]} reverse={true} />
            <SubjectsCard />
            <Testimonial />
            <Footer />
        </main>
    );
};

export default App;
