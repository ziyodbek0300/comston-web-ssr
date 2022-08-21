import React from 'react';
import Image from "next/image";
import Img1 from '../../public/blog/img8.png';
import Img2 from '../../public/blog/img7.png';

export default function Details() {
  return (
    <div className={"container"}>
       <div className="sections-wrapper">
       <div className={"pt-10"}>
            <p className={"text-blue-550 text-16-19-600 pb-4"}>25 July, 2022</p>
            <p className={"text-30-44-600"}>Siemens Opens New Technology Hub in Charlotte, NC to Accelerate Industrialization of Additive Manufacturing</p>
        </div>
        <div className={"py-10 text-18-28-400 text-gray-450"}>
            <p>
            Today, Siemens is announcing the opening of its new Charlotte Advanced Technology Collaboration Hub (CATCH) which will be located in Charlotte, NC. This new strategic research and development hub, spearheaded by Siemens Digital Industries, Siemens Technology and Siemens Energy, now a separately operated company, to focus on helping our customers accelerate their plans for the industrialization of additive manufacturing (AM). Specifically, Siemens will use this space to collaborate with key machine builders (OEMs), end-users and U.S. national laboratories to ensure the successful industrialization of additive manufacturing.
            </p>
            <p className={'py-10'}>
            In conjunction with this announcement, Siemens also recently announced partnerships with ExOne, Xerox and Roboze, leaders in building industrial 3D printers. This partnership will ensure that Siemens and its collaborators have the most advanced hardware on the market.
            </p>
            <p className={'pb-10'}>
            “We are excited to launch this new additive manufacturing hub and to begin inviting customers in to collaborate and find ways to accelerate the industrialization of this technology,” said Tim Bell, Additive Manufacturing Business Manager, Siemens Digital Industries. “The benefits of additive manufacturing are clear from faster time-to-market, to better design through digital prototypes, to localized manufacturing helping to reduce supply chain constraints. We believe that future of manufacturing is additive.”
            </p>
            <p>
            Over the years, Siemens has been instrumental in bringing emerging technologies to the point of industry acceptance and standardization. From Computerized Numerical Controls (CNC) to industrial software, Siemens has always enabled the trailblazers to advance the world we live in. Dr. Hallee Deutchman, Head of Research in Materials and Industrialized Manufacturing (US) for Siemens Technology stated, “the CATCH center will not only help industrialize additive manufacturing, but also help incubate and grow the next generation of cutting-edge technology to solve industry’s hardest manufacturing problems.”
            </p>

            
        </div>
        <div className={"details-img"}>
            <Image src={Img1} className={"w-full"} alt={'scientist'}/>
        </div>
        <div className={"py-10 text-18-28-400 text-gray-450"}>
            <p>
            As a leader in industrial digitalization, Siemens will also look to continue its leadership through additive manufacturing, as it is the first truly digital manufacturing technology.​ We will accomplish this by empowering our vast network of partners and customers to create, make and use additive applications at scale. CATCH will be the entry point for many manufacturers to understand how and why AM is crucial to designing products more effectively, manufacturing them closer to the point of purchase and creating a more resilient supply chain.
            </p>
            <p className={'py-10'}>
            To support our customers along their journey at CATCH, Siemens has accumulated a group of world-class experts from several Siemens businesses and operating companies. CATCH will become one of seven hubs strategically placed at major AM ecosystems around the world with the distinct focus of facilitating customer AM journeys.
            </p>
            
            <p>
            Further enabling the collaboration between Siemens, machine OEM’s, and end users, Siemens Financial Services (SFS) – the financing arm of Siemens – supplied the CATCH lab with a financing solution that aided the leasing of several 3D printers for use in the lab. Financing additive manufacturing is a strategic priority for SFS as the evolution and digitalization of manufacturing continues, and the revolutionary use of 3D printing expands.
            </p>
        </div>
        <div className={"details-img"}>
            <Image src={Img2} className={"w-full"} alt={'microscop'}/>
        </div>
        <div className={"py-10 text-18-28-400 text-gray-450"}>
            <p>
            Siemens Corporation is a subsidiary of Siemens AG, a technology company focused on industry, infrastructure, transport, and healthcare. From more resource-efficient factories, resilient supply chains, and smarter buildings and grids, to cleaner and more comfortable transportation as well as advanced healthcare, the company creates technology with purpose adding real value for customers. By combining the real and the digital worlds, Siemens empowers its customers to transform their industries and markets, helping them to transform the everyday for billions of people. Siemens also owns a majority stake in the publicly listed company Siemens Healthineers, a globally leading medical technology provider shaping the future of healthcare. In addition, Siemens holds a minority stake in Siemens Energy, a global leader in the transmission and generation of electrical power. Siemens has been supporting the industries and creating the infrastructure forming the backbone of America’s economy for more than 160 years, with more than 40,000 employees, 17,000 suppliers, and customers in all 50 states and Puerto Rico. In fiscal 2021, Siemens Group USA generated revenue of nearly $20 billion.
            </p>
            <p className={'py-10'}>
            Siemens Digital Industries (DI) is an innovation leader in automation and digitalization. Closely collaborating with partners and customers, DI drives the digital transformation in the process and discrete industries. With its Digital Enterprise portfolio, DI provides companies of all sizes with an end-to-end set of products, solutions and services to integrate and digitalize the entire value chain. Optimized for the specific needs of each industry, DI’s unique portfolio supports customers to achieve greater productivity and flexibility. DI is constantly adding innovations to its portfolio to integrate cutting-edge future technologies. Siemens Digital Industries has its global headquarters in Nuremberg, Germany, and has around 72,000 employees internationally.
            </p>
            
           
            

        </div>
       </div>
    </div>
  )
}
