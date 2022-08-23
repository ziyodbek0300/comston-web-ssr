import React from 'react';
import Image from "next/image";
import Logo from '../../public/Logo 1-2 1.svg';
import FImage1 from '../../public/icons/Base/Vector (Stroke).svg';
import FImage2 from '../../public/icons/Base/Vector.svg';
import FImage3 from '../../public/icons/Others/Vector.svg';

function Footer() {
    return (<div className={"bg-blue-950 py-16 text-white"}>
        <div className={"container flex lg:flex-row flex-col gap-10 justify-between"}>
            <div className={"w-full"}>
                <div className={"mb-4"}>
                    <Image src={Logo} alt={"Logo"}/>
                </div>
                <p className={"text-16-24-400 text-white font-extralight"}>© 2022 All rights reserved Comston Technologies LLC</p>
            </div>
            <div className={"w-full"}>
                <p className={"text-16-19-600 text-white mb-4 uppercase"}>Company</p>
                <ul>
                    <li className={"text-white mb-3 text-16-24-400 font-extralight"}>About us</li>
                    <li className={"text-white mb-3 text-16-24-400 font-extralight"}>Services</li>
                    <li className={"text-white mb-3 text-16-24-400 font-extralight"}>Features</li>
                    <li className={"text-white mb-3 text-16-24-400 font-extralight"}>Reviews</li>
                </ul>
            </div>
            <div className={"w-full"}>
                <p className={"text-16-19-600 text-white mb-4 uppercase"}>Resources</p>
                <ul>
                    <li className={"text-white mb-3 text-16-24-400 font-extralight"}>Privacy policy</li>
                    <li className={"text-white mb-3 text-16-24-400 font-extralight"}>Terms & conditions</li>
                    <li className={"text-white mb-3 text-16-24-400 font-extralight"}>FAQ</li>
                </ul>
            </div>
            <div className={"w-full"}>
                <p className={"text-16-19-600 text-white mb-4 uppercase"}>contact us</p>
                <ul>
                    <li className={"text-white mb-3 text-16-24-400"}><Image width={20} height={20} src={FImage1} alt={"phone-icon"}/>&nbsp; &nbsp; <span className={"text-white"}>+1 (407) 683-5894</span></li>
                    <li className={"text-white mb-3 text-16-24-400"}><Image width={20} height={20} src={FImage2} alt={"envelope-icon"}/>&nbsp; &nbsp;&nbsp;<span className={"text-white"}>contact@comston.io</span>
                    </li>
                    <li className={"text-white mb-3 text-16-24-400"}><Image width={20} height={20} src={FImage3} alt={"location-icon"}/>&nbsp; &nbsp;<span className={"text-white"}>8010 Sunport Dr., Ste
                        122, Orlando, Florida, 32809</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>);
}

export default Footer;
