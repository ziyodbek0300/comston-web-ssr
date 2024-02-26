import React from "react";
import Computer from "../../public/computer.svg";
import Time from "../../public/time.svg";
import Hand from "../../public/hold.svg";
import Guaranteed from "../../public/success.svg";
import Button from "/components/button";
import Image from "next/image";

function ThirdSection() {
  return (
    <div
      className={"container second-section-home"}
      style={{ padding: "100px 20px" }}
    >
      <div
        className={"md:pt-10"}
        style={{ width: "70%" }}
        data-aos={"fade-up"}
        data-aos-duration={"1200"}
      >
        <h3 className={"text-30-44-700 capitalize mb-6"}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We've adopted a{" "}
          <span className={"text-blue-550"}>Client-Centric Strategy</span>,
          Crafting Solutions for Logistics Leaders and Innovators Like You
        </h3>
        <p className={"text-16-24-400 text-gray-450 mb-10"}>
          At the heart of our consultancy lies a commitment to guiding logistics
          entrepreneurs through every step of their journey. We understand the
          complexities of starting and scaling in the logistics sector, and
          we&apos;re here to make it easier:
        </p>
        <Button
          link="/projects"
          duration={"1200"}
          text={"View Portfolio"}
          classes={"bg-blue-950 hover:bg-blue-1000"}
        />
      </div>
      <div
        className={"w-full grid grid-cols-2 gap-7 "}
        data-aos={"fade-up"}
        data-aos-duration={"800"}
      >
        <div className={"rounded-lg shadow-b p-6"}>
          <Image src={Computer} alt="computer" className={"mb-5"} />
          <p className="card-title text-18-26-500 mb-2">Software Solutions</p>
          <p className="card-text text-16-24-400 text-gray-450">
          We recommend the best software to streamline your operations or can develop a custom solution tailored to your business needs.
          </p>
        </div>
        <div className={"rounded-lg shadow-b p-6"}>
          <Image src={Time} alt="computer" className={"mb-5"} />
          <p className="card-title text-18-26-500 mb-2">Business Launch Guidance</p>
          <p className="card-text text-16-24-400 text-gray-450">
          From navigating administrative tasks to setting up your business structure, we&apos;re with you from day one.
          </p>
        </div>
        <div className={"rounded-lg shadow-b p-6"}>
          <Image src={Guaranteed} alt="computer" className={"mb-5"} />
        <p className="card-title text-18-26-500 mb-2">Permits and Licenses</p>
          <p className="card-text text-16-24-400 text-gray-450">
          We help you with the process of obtaining the necessary permits and licenses, ensuring you&apos;re compliant and ready to operate.
          </p>
        </div>
        <div className={"rounded-lg shadow-b p-6"}>
          <Image src={Hand} alt="computer" className={"mb-5"} />
          <p className="card-title text-18-26-500 mb-2">Brokerage and Contract Assistance</p>
          <p className="card-text text-16-24-400 text-gray-450">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            We don't just help you find brokers; we assist in securing year-long contracts to ensure steady business flow.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
