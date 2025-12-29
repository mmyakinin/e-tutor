import Slider from "react-slick";

const TestimonialData = [
    {
        id: 1,
        name: "John Due",
        role: "Front-End Student",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        imgUrl: "https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg",
    },
    {
        id: 2,
        name: "Steve Smith",
        role: "Back-End Student",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        imgUrl: "https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg",
    },
    {
        id: 3,
        name: "Kristen",
        role: "Full-Stack Student",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        imgUrl: "https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg",
    },
    {
        id: 4,
        name: "Ariana",
        role: "Python Student",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        imgUrl: "https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg",
    },
];

const Testimonial = () => {
    const setting = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="py-8 md:py-16 mb-8">
            <div className="container">
                {/* Header Section */}
                <div className="space-y-4 text-center max-w-[600px] mx-auto mb-5">
                    <h1 className="uppercase font-semibold text-orange-600">
                        Our Testimonials
                    </h1>
                    <p className="font-semibold text-2xl md:text-3xl">
                        What Our Students Say About Us
                    </p>
                </div>

                {/* Slider Section */}
                <div>
                    <Slider {...setting}>
                        {TestimonialData.map((item) => (
                            <div key={item.id} className="w-full h-full py-4">
                                <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                                    <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-5">
                                        <img
                                            src={item.imgUrl}
                                            alt={item.name}
                                            className="rounded-full w-16 h-16"
                                        />
                                        <div>
                                            <p className="text-xl font-bold text-black/80">
                                                {item.name}
                                            </p>
                                            <p>{item.role}</p>
                                        </div>
                                    </div>
                                    <div className="py-6 space-y-4">
                                        <p className="text-sm text-gray-500">
                                            {item.text}
                                        </p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
