import React from "react";

export default function FourthSection() {
  return (
    <div className={"container"}>
      <div className={"pt-48 pb-24"}>
        <h2 className={"capitalize text-32-44-700 text-center mb-4"}>
          Collaboration strategy for{" "}
          <span className={"text-blue-550"}>Business Launch</span>
        </h2>
        <p
          className={
            "lg:px-44 px-4 text-16-24-400 text-gray-450 text-center mb-12"
          }
        >
          We&apos;re here to provide expert advice and actionable strategies to navigate the complexities of launching a logistics business, setting you on the path to success from day one.
        </p>
        <div className={"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"}>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="shadow-ca h-full bg-card-gr rounded-xl p-6"
          >
            <p className={"text-32-44-700 mb-12"}>01</p>
            <p className={"text-20-24-700 uppercase mb-6"}>Document Preparation and Legal Framework</p>
            <p className={"text-16-24-400 text-gray-450 pr-12 pb-3"}>
            Understanding the essential documents for starting your logistics business, including business registration, tax identification numbers, and any industry-specific compliance documents.
            </p>
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="colored-card shadow-ca h-full bg-card-gr rounded-xl p-6"
          >
            <p className={"text-32-44-700 mb-12"}>02</p>
            <p className={"text-20-24-700 uppercase mb-6"}>
            Capital and Financial Planning
            </p>
            <p className={"text-16-24-400 text-450 pr-12 pb-3"}>
            Estimating startup costs, exploring funding options, and financial planning to ensure your logistics business has the financial foundation to launch and grow.
            </p>
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="shadow-ca h-full bg-card-gr rounded-xl p-6"
          >
            <p className={"text-32-44-700 mb-12"}>03</p>
            <p className={"text-20-24-700 uppercase mb-6"}>
            Permit Acquisition and Regulatory Compliance
            </p>
            <p className={"text-16-24-400 text-gray-450 pr-12 pb-3"}>
            Navigating the complexities of obtaining necessary permits and licenses, understanding regulatory requirements, and ensuring your business complies with local, state, and federal laws.
            </p>
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className="shadow-ca h-full bg-card-gr rounded-xl p-6"
          >
            <p className={"text-32-44-700 mb-12"}>04</p>
            <p className={"text-20-24-700 uppercase mb-6"}>
            Strategic Partnership Development
            </p>
            <p className={"text-16-24-400 text-gray-450 pr-12 pb-3"}>
            Identifying and connecting with key partners, suppliers, and collaborators who can support your business operations, from fleet suppliers to logistics platforms.
            </p>
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className="shadow-ca h-full bg-card-gr rounded-xl p-6"
          >
            <p className={"text-32-44-700 mb-12"}>05</p>
            <p className={"text-20-24-700 uppercase mb-6"}>
            Market Analysis and Strategy Formation
            </p>
            <p className={"text-16-24-400 text-gray-450 pr-12 pb-3"}>
            Conducting thorough market research to understand your competitive landscape, identifying your target market, and developing a strategic plan to position your business for success.
            </p>
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className="shadow-ca h-full bg-card-gr rounded-xl p-6"
          >
            <p className={"text-32-44-700 mb-12"}>06</p>
            <p className={"text-20-24-700 uppercase mb-6"}>
            Technology and Infrastructure Setup
            </p>
            <p className={"text-16-24-400 text-gray-450 pr-12 pb-3"}>
            Selecting the right technology tools and infrastructure to streamline operations, from fleet management software to communication and tracking systems, ensuring your business is equipped for efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
