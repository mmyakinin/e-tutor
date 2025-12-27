import React from "react";
import CountUp from "react-countup";

const NumberCounter = () => {
    return (
        <div className="bg-secondary text-white py-12">
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl font-semibold">
                        <CountUp
                            start={0}
                            end={100}
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </p>
                    <p>Expert Tutors</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl font-semibold">
                        <CountUp
                            start={0}
                            end={2000}
                            suffix="+"
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </p>
                    <p>Hours Content</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl font-semibold">
                        <CountUp
                            start={0}
                            end={200}
                            suffix="+"
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </p>
                    <p>Subject and Courses</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl font-semibold">
                        <CountUp
                            start={0}
                            end={3000}
                            suffix="+"
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </p>
                    <p>Active students</p>
                </div>
            </div>
        </div>
    );
};

export default NumberCounter;
