import React from 'react';
import Image from "next/image";
import Icon1 from '../../public/icons-web-development/Vector.svg';
import Icon2 from '../../public/icons-web-development/Vector-1.svg';
import Icon3 from '../../public/icons-web-development/Vector-2.svg';
import Icon4 from '../../public/icons-web-development/Vector-3.svg';
import Icon5 from '../../public/icons-web-development/Vector-4.svg';
import Icon6 from '../../public/icons-web-development/Vector-5.svg';

function SecondSection() {
    return (<div className={"container"}>
        <div className={"lg:py-24 py-20"}>
            <h2 className={"capitalize text-32-44-700 text-center mb-4 lg:w-full w-[90%] mx-auto"}>Comston <span
                className={"text-blue-550"}>Web Development</span> Services</h2>
            <p className={"text-16-24-400 text-gray-450 text-center capitalize mb-10 lg:w-full w-[90%] mx-auto"}>Grow Your business with a
                conversion-driven website </p>
            <div className={"grid lg:grid-cols-3 md:grid-cols-2 gap-8"}>
                <div data-aos={"fade-up"} data-aos-duration={"800"}>
                    <div className={"mb-6 w-16 h-16 flex items-center justify-center"}>
                        <Image src={Icon1} className={""} alt={"telemedicine"}/>
                    </div>
                    <p className={"text-20-24-700 uppercase mb-6"}>Our expertise in web</p>
                    <p className={"text-16-24-400 text-gray-450"}>
                        Over the course of 7 years, we have built a vast number of websites for a variety of clients, including: government, non-profit, e-commerce, 
                        businesses with small and medium sized teams as well as large-scale businesses. 
                    </p>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"800"}>
                    <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                        <Image src={Icon2} className={""} alt={"telemedicine"}/>
                    </div>
                    <p className={"text-20-24-700 uppercase mb-4"}>Creative ideas</p>
                    <p className={"text-16-24-400 text-gray-450"}>
                        The ideas come from you, but as your trusted partner, our purpose is to help you create the perfect website for your business. 
                        Hence, we will suggest you our best ideas for your website to excel amongst your competition. 


                    </p>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"800"}>
                    <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                        <Image src={Icon3} className={""} alt={"telemedicine"}/>
                    </div>
                    <p className={"text-20-24-700 uppercase mb-4"}>Rsponsive design</p>
                    <p className={"text-16-24-400 text-gray-450"}>
                        Whether it be a landing page for a business, a static website, or a dynamic website, our websites are fully responsive. This means that your website will look great on any device.
                    </p>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"1000"}>
                    <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                        <Image src={Icon4} className={""} alt={"telemedicine"}/>
                    </div>
                    <p className={"text-20-24-700 uppercase mb-4"}>seo optimization</p>
                    <p className={"text-16-24-400 text-gray-450"}>
                        Your website might be ready and you are satisfied with it, but you are not done - it doesn&apos;t simply get discovered on the web. Search Engine Optimization (SEO) needs to be performed to get your website to the top of search engines like Google and Yahoo.
                    </p>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"1000"}>
                    <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                        <Image src={Icon5} className={""} alt={"telemedicine"}/>
                    </div>
                    <p className={"text-20-24-700 uppercase mb-4"}>CONTENT management</p>
                    <p className={"text-16-24-400 text-gray-450"}>
                        You might have a website with great design and awesome animations, but without proper content like blogs and articles appropriate for your industry, your website will not be able to get any traffic which is a foundation for SEO. We have experts for content writing in at least 6 different industries.
                    </p>
                </div>
                <div data-aos={"fade-up"} data-aos-duration={"1000"}>
                    <div className={"mb-4 w-16 h-16  flex items-center justify-center"}>
                        <Image src={Icon6} className={""} alt={"telemedicine"}/>
                    </div>
                    <p className={"text-20-24-700 uppercase mb-4"}>secure website</p>
                    <p className={"text-16-24-400 text-gray-450"}>
                        If you wish to build a web application, you can be sure that your website is secure. We have the expertise to make sure that your website is secure by the backend and that your internal data is safe. Upon completion of the web project you will get the ownership of the whole codebase for your website.
                    </p>
                </div>
            </div>
        </div>
    </div>);
}

export default SecondSection;
