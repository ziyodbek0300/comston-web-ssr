import React from 'react';
import Image from "next/image";
import Icon1 from '../../public/icons-web-development/Vector.svg';
import Icon2 from '../../public/icons-web-development/Vector-1.svg';
import Icon3 from '../../public/icons-web-development/Vector-2.svg';
import Icon4 from '../../public/icons-web-development/Vector-3.svg';
import Icon5 from '../../public/icons-web-development/Vector-4.svg';
import Icon6 from '../../public/icons-web-development/Vector-5.svg';

function SecondSection() {
    return (
        <div className={"container"}>
            <div className={"py-24"}>
                <h2 className={"capitalize text-32-44-700 text-center mb-1"}>Comston Web <span
                    className={"text-blue-550"}>Development</span>  Services</h2>
                 <p className={"text-16-24-400 text-gray-450 text-center capitalize mb-14"}>Grow Your business with a conversion-driven website </p>  
                <div className={"grid grid-cols-3 gap-8"}>
                    <div>
                        <div className={"mb-4 w-16 h-16 flex items-center justify-center"}>
                            <Image src={Icon1} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-20-24-700 uppercase mb-4"}>Web design and development</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                        Get a custom website that converts. Thrive’s Orlando web design experts build high-performing websites tailored to meet your unique business needs and goals. We combine creative direction, industry standards and technical skills to develop conversion-focused websites.
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                            <Image src={Icon2} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-20-24-700 uppercase mb-4"}>Creative ideas</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollitsome. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                            <Image src={Icon3} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-20-24-700 uppercase mb-4"}>responsive design</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                        A website is the face of your business, and we ensure Your responsive website is built to be easy to use, mobile-friendly, and will look good no matter what device it is viewed on. Responsive websites adapt to any screen size, including desktop, tablet, and mobile, leading to increased user engagement and conversion.
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                            <Image src={Icon4} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-20-24-700 uppercase mb-4"}>seo optimization</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollitsome. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                            <Image src={Icon5} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-20-24-700 uppercase mb-4"}>Conten<span className="text-16-24-700 lowercase">t</span> management</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollitsome. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua
                        </p>
                    </div>
                    <div>
                        <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                            <Image src={Icon6} className={""} alt={"telemedicine"}/>
                        </div>
                        <p className={"text-20-24-700 uppercase mb-4"}>secure website</p>
                        <p className={"text-16-24-400 text-gray-450"}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollitsome. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;
