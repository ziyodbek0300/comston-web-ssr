import React from 'react';

// import Button from "../../components/button";

function FourthSection() {
    return (
        <div className={"bg-blue-950 py-16"}>
            <div className={"container py-14 flex md:flex-row flex-col gap-14 text-center"}>
                <div className={"rounded-lg"}>
                    <p className="card-title text-60-56-800 text-blue-550 mb-6">82%</p>
                    <p className={"text-24-30-500 mb-4 text-white"}>Lower Cost</p>
                    <p className="opacity-60 font-extralight text-16-24-400 text-white">
                        The average founder spends $83K within the first 2 years, where our founders spend less than $15K to go-to-market
                    </p>
                </div>
                <div className={"rounded-lg"}>
                    <p className="card-title text-60-56-800 text-blue-550 mb-6">127K</p>
                    <p className={"text-24-30-500 mb-4 text-white"}>Average Funding</p>
                    <p className="opacity-60 font-extralight text-16-24-400 text-white">
                        Our program graduates raise an average of $127K in first funding, with some raising more than $1M even before launch
                    </p>
                </div>
                <div className={"rounded-lg"}>
                    <p className="card-title text-60-56-800 text-blue-550 mb-6">84%</p>
                    <p className={"text-24-30-500 mb-4 text-white"}>Still In Business</p>
                    <p className="opacity-60 font-extralight text-16-24-400 text-white">
                        90% of startups fail within 2 years, but over 84% of startups within our network are still in operation after 2 years
                    </p>
                </div>
            </div>
        </div>);
}

export default FourthSection;
