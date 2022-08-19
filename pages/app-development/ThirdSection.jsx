import React from "react";
import Logo1 from "../../public/logos/image 39.png";
import Logo2 from "../../public/logos/image 38.png";
import Logo3 from "../../public/logos/image 40.png";
import Logo4 from "../../public/logos/image 41.png";
import Logo5 from "../../public/logos/image 42.png";
import Logo6 from "../../public/logos/image 43.png";
import Image from "next/image";

function ThirdSection() {
  return (
    <div className={"bg-blue-50 py-12"}>
      <div className="container flex justify-between items-center">
        <div className={"w-full pb-12"}>
          <h2 className={"text-30-44-600 mb-6 capitalize"}>
            The Companies Already <br /> Working with Aveo Software
          </h2>
          <p className={"text-16-24-400 text-gray-450 pr-5"}>
            We partner with companies of all sizes, from startups to
            enterprises, to create bespoke digital products that solve problems.
          </p>
        </div>
        <div className={"w-full pb-12"}>
          <div
            className={"w-2/3 ml-20 grid grid-cols-3 gap-4 p-4 text-center"}
          >
            <div>
              <Image src={Logo3} alt={"Logo 1"} />
            </div>
            <div>
              <Image src={Logo5} alt={"Logo 1"} />
            </div>
            <div>
              <Image src={Logo2} alt={"Logo 1"} />
            </div>
            <div>
              <Image src={Logo1} alt={"Logo 1"} />
            </div>
            <div>
              <Image src={Logo6} alt={"Logo 1"} />
            </div>
            <div>
              <Image src={Logo4} alt={"Logo 1"} />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
