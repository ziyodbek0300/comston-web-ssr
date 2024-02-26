import React from "react";
import Image from "next/image";
import P1 from "../../public/samsara-web.png";
import P2 from "../../public/amazon-web.png";
import P3 from "../../public/tql-web.png";
import P4 from "../../public/fedex-web.png";
import P5 from "../../public/kroger-web.png";
import P6 from "../../public/dhl-web.png";

function SixthSection() {
  return (
    <div className={"bg-blue-150 py-12"}>
      <div
        className={
          "lg:flex-row flex-col flex justify-between container lg:text-left md:text-center lg:gap-10 pb-14"
        }
      >
        <div className={"w-full"}>
          <h2 className={"text-32-44-700 capitalize"}>Our Partners</h2>
          {/*<span className={"text-blue-550"}>Partners</span> for blue highlight*/}
        </div>
        <div className={"w-full"}>
          {/* <p className={"text-16-24-400 text-gray-450 mt-4"}>
                    We have worked with the top brands and government institutions in the USA. 
                </p> */}
        </div>
      </div>
      <div className={"mt-8 p-0 m-0"}>
        <div
          className={
            "lg:flex grid sm:grid-cols-3 grid-cols-2 lg:text-left text-center items-center container p-0 justify-between"
          }
        >
          <div data-aos={"fade-up"} data-aos-duration={"300"}>
            <Image
              src={P1}
              className={
                "opacity-60 hover:opacity-100 hover:grayscale-0 transition-all grayscale"
              }
              alt={"samsara"}
            />
          </div>
          <div data-aos={"fade-up"} data-aos-duration={"500"}>
            <Image
              src={P2}
              className={
                "opacity-40 hover:opacity-100 hover:grayscale-0 transition-all grayscale"
              }
              alt={"amazon"}
            />
          </div>
          <div data-aos={"fade-up"} data-aos-duration={"700"}>
            <Image
              src={P3}
              className={
                "opacity-40 hover:opacity-100 hover:grayscale-0 transition-all grayscale"
              }
              alt={"tql"}
            />
          </div>
          <div data-aos={"fade-up"} data-aos-duration={"900"}>
            <Image
              src={P4}
              className={
                "opacity-60 hover:opacity-100 hover:grayscale-0 transition-all grayscale"
              }
              alt={"fedex"}
            />
          </div>
          <div data-aos={"fade-up"} data-aos-duration={"1100"}>
            <Image
              src={P5}
              className={
                "opacity-40 hover:opacity-100 hover:grayscale-0 transition-all grayscale"
              }
              alt={"kroger"}
            />
          </div>
          <div data-aos={"fade-up"} data-aos-duration={"1300"}>
            <Image
              src={P6}
              className={
                "opacity-40 hover:opacity-100 hover:grayscale-0 transition-all grayscale"
              }
              alt={"dhl"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
