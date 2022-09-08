import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image'
import Logo from "../../public/Logo.svg";
import useResizeObserver from '@react-hook/resize-observer'
import Link from "next/link";
import {generateETag} from "next/dist/server/lib/etag";

const useSize = (target) => {
    const [size, setSize] = React.useState()

    React.useLayoutEffect(() => {
        setSize(target.current.getBoundingClientRect())
    }, [target])

    // Where the magic happens
    useResizeObserver(target, (entry) => setSize(entry.contentRect))
    return size
}

function Navbar() {
    React.useLayoutEffect = React.useEffect
    const [opened, setOpened] = useState(false);
    const dropRef = useRef(null);
    const target = React.useRef(null)
    const size = useSize(target)
    const [iSize, setISize] = useState({height: 0, width: 0})

    const handleOpen = () => {
        dropRef.current.classList.toggle("hidden");
    }

    useEffect(() => {
        if (size?.width > 900) {
            setOpened(false)
            setISize({width: 0, height: 0})
        } else {
            setISize({width: 20, height: 20})
        }
    }, [size?.width]);

    const handleOpenNav = () => {
        setOpened(prev => !prev);
    }

    const handlePhoneClick = () => {
        try {
            generateETag('config', 'AW-10933023663/ZTcPCJ7qrNwDEK_not0o', {
                'phone_conversion_number': '(332) 322-2244'
            });
        } catch (e) {
            console.log("phone tracking", e)
        }
    }

    return (<div className={"shadow-h bg-white sticky z-40 top-0"} ref={target}>
        <div className={"relative"}>
            <nav className={"container flex items-center justify-between"}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,@next/next/no-html-link-for-pages */}
                <a href="/" className={"navbar-brand"}>
                    <Image src={Logo} className={"navbar-brand__img"} alt="navbar-brand"/>
                </a>
                <Image
                    onClick={handleOpenNav}
                    src={opened ? '/times.svg' : '/Vector.svg'}
                    height={iSize.height}
                    width={iSize.width}
                    alt="menu-icon"
                    className={"navbar-toggle"}
                />
                <ul className={!opened ? "navbar-menu relative text-16-20-500 bg-white" : "shadow-c navbar-menu-mobile absolute top-full left-0 flex flex-col gap-6 m-auto p-5 text-16-20-500 w-full bg-white"}>
                    <li className={"nav-item hover:text-blue-550 cursor-pointer inline-block dropdown"}
                        onClick={handleOpen}>Services
                    </li>
                    <ul className={!opened ? "m-0 p-0 absolute -left-2 top-8 shadow-c rounded-lg bg-white hidden" : "m-0 p-0 absolute -left-2 top-12 shadow-c rounded-lg bg-white hidden"}
                        ref={dropRef}>
                        <li className={"p-5 hover:bg-blue-150 hover:text-blue-550 cursor-pointer rounded-t-lg"}>
                            <Link href={'/app-development'}>App Development</Link>
                        </li>
                        <li className={"p-5 hover:bg-blue-150 hover:text-blue-550 cursor-pointer rounded-b-lg"}>
                            <Link href={'/web-development'}>Web Development</Link>
                        </li>
                    </ul>
                    {/*<li className={"nav-item hover:text-blue-550 cursor-pointer inline-block"}>*/}
                    {/*    <Link href={"/projects"}>Projects</Link>*/}
                    {/*</li>*/}
                    <li className={"nav-item hover:text-blue-550 cursor-pointer inline-block"}>
                        <Link href="/#comments">Reviews</Link>
                    </li>
                    <li className={"nav-item hover:text-blue-550 cursor-pointer inline-block"}>
                        <Link href={'/blog'}>Blog</Link>
                    </li>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <li className={"nav-item hover:text-blue-550 cursor-pointer inline-block"}>
                        <Link href={"/#faqs"}>FAQ`s</Link>
                    </li>
                    <li className={"nav-item hover:text-blue-550 cursor-pointer inline-block"}>
                        <Link href={"/#contacts"}>Contacts</Link>
                    </li>
                    <li className={"nav-item phone hover:text-blue-550 cursor-pointer inline-block"}>
                        <a href="tel:3323222244" onClick={handlePhoneClick}
                           className={!opened ? "nav-link phone" : "nav-link phone-mobile"}>(332) 322-2244</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>);
}

export default Navbar;
