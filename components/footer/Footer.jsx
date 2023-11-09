import React from 'react';
import Image from "next/image";
import Logo from '../../public/Logo 1-2 1.svg';
import FImage1 from '../../public/icons/Base/Vector (Stroke).svg';
import FImage2 from '../../public/icons/Base/Vector.svg';
import FImage3 from '../../public/icons/Others/Vector.svg';
import Link from "next/link";
import {generateETag} from "next/dist/server/lib/etag";

function Footer() {
    const handleEmailClick = () => {
        console.log("Email Clicked")
        try {
            var callback = function () {
                if (typeof (url) != 'undefined') {
                    window.location = url;
                } else if (url === 'http://www.comston.io') {
                    window.location = url;
                }
            };
            generateETag('event', 'conversion', {
                'send_to': 'AW-10933023663/wTnfCJDAtdwDEK_not0o',
                'event_callback': callback
            });
        } catch (e) {
            console.log("Gtag", e)
        }
        return false;
    }

    const handlePhoneClick = () => {
        console.log("Phone Clicked")
        try {
            generateETag('config', 'AW-10933023663/ZTcPCJ7qrNwDEK_not0o', {
                'phone_conversion_number': '(707) 717-4444'
            });
        } catch (e) {
            console.log("phone tracking", e)
        }
    }

    return (<div className={"bg-blue-950 py-16 text-white"}>
        <div className={"container flex lg:flex-row flex-col gap-10 justify-between"}>
            <div className={"w-full"}>
                <div className={"pb-4"}>
                    <Image src={Logo} alt={"Logo"}/>
                </div>
                <p className={"text-16-24-400 text-white font-extralight"}>© 2022 All rights reserved Comston
                    Technologies LLC</p>
            </div>
            <div className={"w-full"}>
                <p className={"text-16-19-600 text-white mb-4 uppercase"}>Company</p>
                <ul>
                    <li className={"text-white mb-3 text-16-24-400 font-extralight"}>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className={"text-white mb-3 text-16-24-400 font-extralight"}>
                        <Link href={"/app-development"}>App Development</Link>
                    </li>
                    <li className={"text-white mb-3 text-16-24-400 font-extralight"}>
                        <Link href={"/web-development"}>Web Development</Link>
                    </li>
                    <li className={"text-white mb-3 text-16-24-400 font-extralight"}>
                        <Link href={"/#comments"}>Reviews</Link>
                    </li>
                </ul>
            </div>
            <div className={"w-full"}>
                <p className={"text-16-19-600 text-white mb-4 uppercase"}>Resources</p>
                <ul>
                    <li className={"text-white mb-3 text-16-24-400 font-extralight"}><a
                        href="https://www.privacypolicygenerator.info/live.php?token=2RnmpKjvgvjVMnnKOku8ece9EtUE7CzG"
                        target="#">Privacy Policy</a></li>
                    {/* <li className={"text-white mb-3 text-16-24-400 font-extralight"}>Terms & conditions</li> */}
                    <li className={"text-white mb-3 text-16-24-400 font-extralight"}>
                        <Link href={"/#faqs"}>FAQ</Link>
                    </li>
                </ul>
            </div>
            <div className={"w-full"}>
                <p className={"text-16-19-600 text-white mb-4 uppercase"}>contact us</p>
                <ul>
                    <li className={"text-white mb-3 text-16-24-400"}><Image width={20} height={20} src={FImage1}
                                                                            alt={"phone-icon"}/>&nbsp; &nbsp; <span
                        className={"text-white"}>
                        <a href="tel:3323222244" onClick={handlePhoneClick}>(707) 717-4444</a>
                    </span></li>
                    <li className={"text-white mb-3 text-16-24-400"}><Image width={20} height={20} src={FImage2}
                                                                            alt={"envelope-icon"}/>&nbsp; &nbsp;&nbsp;
                        <span className={"text-white"}>
                        <a href="mailto:contact@comston.io" onClick={handleEmailClick}>contact@comston.io</a>
                    </span>
                    </li>
                    <li className={"text-white mb-3 text-16-24-400"}><Image width={20} height={20} src={FImage3}
                                                                            alt={"location-icon"}/>&nbsp; &nbsp;<span
                        className={"text-white"}>
                        <a
                            href="https://www.google.com/maps/place/6925+Lake+Ellenor+Dr,+Orlando,+FL+32809/@28.4655806,-81.4023714,17z/data=!3m1!4b1!4m6!3m5!1s0x88e77d4979f909f9:0x7a5c0fe59d9724bd!8m2!3d28.4655759!4d-81.3997965!16s%2Fg%2F11kc745rrz?entry=ttu"
                            target={"#"}
                        >
                        6925 Lake Ellenor Dr, <br/> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Orlando, FL 32809
                    </a></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>);
}

export default Footer;
