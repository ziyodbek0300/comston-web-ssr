import React from 'react';

// import Button from "../../components/button";

function FourthSection() {
    return (
        <div className={"bg-blue-950 py-16"}>
            <div className={"container py-14 flex md:flex-row flex-col gap-14 text-center"}>
                <div className={"rounded-lg"} data-aos={"fade-up"} data-aos-duration={"500"}>
                    <p className="card-title text-60-56-800 text-blue-550 mb-6">25%</p>
                    <p className={"text-24-30-500 mb-4 text-white"}>Lower Cost</p>
                    <p className="opacity-90 font-light text-16-24-400 text-white">
                        The average founder spends $190K within the first 2 years, where our founders spend less than $140K to go-to-market
                    </p>
                </div>
                <div className={"rounded-lg"} data-aos={"fade-up"} data-aos-duration={"700"}>
                    <p className="card-title text-60-56-800 text-blue-550 mb-6">127K</p>
                    <p className={"text-24-30-500 mb-4 text-white"}>Average Funding</p>
                    <p className="opacity-90 font-light text-16-24-400 text-white">
                        Our program graduates raise an average of $127K in first funding, with some raising more than $1M even before launch
                    </p>
                </div>
                <div className={"rounded-lg"} data-aos={"fade-up"} data-aos-duration={"900"}>
                    <p className="card-title text-60-56-800 text-blue-550 mb-6">84%</p>
                    <p className={"text-24-30-500 mb-4 text-white"}>Still In Business</p>
                    <p className="opacity-90 font-light text-16-24-400 text-white">
                        90% of businesses fail within 2 years, but over 84% of businesses within our network are still in operation after 2 years
                    </p>
                </div>
            </div>
        </div>);
}

export default FourthSection;
