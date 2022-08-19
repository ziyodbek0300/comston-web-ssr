import React from "react";
import Image from "next/image";
import Img1 from "../../public/project-page images/image 44.png";
import Img2 from "../../public/project-page images/Rectangle 11 (1).png";
import Img3 from "../../public/project-page images/Rectangle 11 (2).png";
import Img4 from "../../public/project-page images/Rectangle 11 (3).png";
import Img5 from "../../public/project-page images/Rectangle 12.png";
import Img6 from "../../public/project-page images/Rectangle 11.png";

export default function FirstSection() {
  return (
    <div>
      <h2 className={"text-30-44-700 text-center capitalize pt-7 "}>
        We've taken a founder-first approach, building a <br /> program for
        entrepreneurs just like you
      </h2>
      <p className={"text-16-24-400 text-center text-gray-450 pt-6 pb-9"}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Ultrices quam
        facilisi praesent ipsum, urna, <br /> faucibus sed id dictumst. Cursus
        laoreet
      </p>
      <div className="grid grid-cols-2 gap-7 container">
        <div className="grid gap-7">
          <Image src={Img1} alt={"human 1"} />
          <div className="flex gap-7">
            <Image src={Img3} alt={"human 1"} />
            <Image src={Img4} alt={"human 1"} />
          </div>
        </div>
        <div className="grid gap-7">
          <div className="flex gap-7">
            <Image src={Img6} alt={"human 1"} />
            <Image src={Img2} alt={"human 1"} />
          </div>
          <Image src={Img5} alt={"human 1"} />
        </div>
      </div>
    </div>
  );
}
