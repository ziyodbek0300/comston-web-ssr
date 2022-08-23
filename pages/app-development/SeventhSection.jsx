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
        <h2 className={"capitalize text-32-44-700 text-center mt-24 mb-14"}>
          Our website{" "}
          <span className={"text-blue-550"}>Design & development</span> Process
        </h2>
        <div className="lg:px-20 mx-auto mb-12 flex lg:flex-row flex-col lg:max-w-full max-w-2xl mx-auto lg:gap-8 gap-4">
          <div className={"w-full"}>
            <Image src={Img1} alt={"goals"} />
          </div>
          <div className={"w-full "}>
            <h3 className={"text-30-44-600 capitalize"}>View our case study</h3>
            <p className={"text-16-24-400 text-gray-450 pt-3"}>
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
        <div className="lg:px-20 mx-auto mb-12 flex lg:flex-row flex-col-reverse lg:max-w-full max-w-2xl mx-auto lg:gap-8 gap-4">
          <div className={"w-full "}>
            <h3 className={"text-30-44-600 capitalize"}>View our case study</h3>
            <p className={"text-16-24-400 text-gray-450 pt-3"}>
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
          <div className={"w-full"}>
            <Image src={Img1} className={"w-full"} alt={"goals"} />
          </div>
        </div>
        <div className="lg:px-20 mx-auto mb-12 flex lg:flex-row flex-col lg:max-w-full max-w-2xl mx-auto lg:gap-8 gap-4">
          <div className={"w-full"}>
            <Image src={Img1} alt={"goals"} />
          </div>
          <div className={"w-full "}>
            <h3 className={"text-30-44-600 capitalize"}>View our case study</h3>
            <p className={"text-16-24-400 text-gray-450 pt-3"}>
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
