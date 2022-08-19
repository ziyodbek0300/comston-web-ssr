import React from "react";
import Image from "next/image";

import Img1 from "../../public/app-development-images/image 57.png";
import Img2 from "../../public/app-development-images/image 57 (1).png";
import Img3 from "../../public/app-development-images/image 57 (2).png";
import arrow from "../../public/app-development-images/Vector.png";

function SeventhSection() {
  return (
    <div className={"development-fourthSection"}>
      <div className={"py-24 container"}>
        <h2 className={"capitalize text-32-44-700 text-center my-24"}>
          Our website{" "}
          <span className={"text-blue-550"}>Design & development</span> Process
        </h2>
        <div className="px-20 mx-auto grid grid-cols-2 gap-8">
          <Image src={Img1} className={"w-full"} alt={"goals"} />
          <div className={"w-50 "}>
            <h3 className={"text-30-44-600 capitalize"}>View our case study</h3>
            <p className={"text-16-24-400 text-gray-450 pt-6"}>
              Lorem ipsum consectetur adipiscing elit duis tristique
              sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula
              ipsum a arcu cursus vitae congue. Lorem ipsum consectetur
              adipiscing elit duis tristique sollicitudin nibh sit amet commodo
              nulla facilisi nullam vehicula ipsum a arcu cursus vitae
              congueLorem ipsum consectetur adipiscing elit duis tristique
              sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula
            </p>
            <a className={"pt-6 block "} href="#">
              <span
                className={"mr-3 text-16 font-semibold uppercase text-blue-550"}
              >
                Portfolio
              </span>
              <Image src={arrow} className={"w-full"} alt={"goals"} />
            </a>
          </div>
        </div>
        <div className="px-20 mx-auto grid grid-cols-2 gap-8 pt-10 mt-3">
          <div className={"w-50 "}>
            <h3 className={"text-30-44-600 capitalize"}>View our case study</h3>
            <p className={"text-16-24-400 text-gray-450 pt-6"}>
              Lorem ipsum consectetur adipiscing elit duis tristique
              sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula
              ipsum a arcu cursus vitae congue. Lorem ipsum consectetur
              adipiscing elit duis tristique sollicitudin nibh sit amet commodo
              nulla facilisi nullam vehicula ipsum a arcu cursus vitae
              congueLorem ipsum consectetur adipiscing elit duis tristique
              sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula
            </p>
            <a className={"pt-6 block "} href="#">
              <span
                className={"mr-3 text-16 font-semibold uppercase text-blue-550"}
              >
                Portfolio
              </span>
              <Image src={arrow} className={"w-full"} alt={"goals"} />
            </a>
          </div>
          <Image src={Img2} className={"w-full"} alt={"goals"} />

        </div>
        <div className="px-20 mx-auto grid grid-cols-2 gap-8 py-10 mt-3 mb-10">
          <Image src={Img3} className={"w-full"} alt={"goals"} />
          <div className={"w-50 "}>
            <h3 className={"text-30-44-600 capitalize"}>View our case study</h3>
            <p className={"text-16-24-400 text-gray-450 pt-6"}>
              Lorem ipsum consectetur adipiscing elit duis tristique
              sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula
              ipsum a arcu cursus vitae congue. Lorem ipsum consectetur
              adipiscing elit duis tristique sollicitudin nibh sit amet commodo
              nulla facilisi nullam vehicula ipsum a arcu cursus vitae
              congueLorem ipsum consectetur adipiscing elit duis tristique
              sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula
            </p>
            <a className={"pt-6 block "} href="#">
              <span
                className={"mr-3 text-16 font-semibold uppercase text-blue-550"}
              >
                Portfolio
              </span>
              <Image src={arrow} className={"w-full"} alt={"goals"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SeventhSection;
