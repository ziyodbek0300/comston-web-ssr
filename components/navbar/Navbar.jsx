import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image'
import Logo from "../../public/Logo.svg";
import useResizeObserver from '@react-hook/resize-observer'

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

    return (<div className={"shadow-h bg-white sticky top-0"} ref={target}>
        <nav className={"container flex items-center justify-between relative"}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className={"navbar-brand"}>
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
            <ul className={!opened ? "navbar-menu relative text-16-20-500 bg-white" : "shadow-c navbar-menu-mobile absolute top-full flex flex-col gap-6 m-auto py-5 text-16-20-500 w-full bg-white"}>
                <li className={"nav-item hover:text-blue-550 cursor-pointer inline-block dropdown"}
                    onClick={handleOpen}>Services
                </li>
                <ul className={!opened ? "m-0 p-0 absolute -left-2 top-8 shadow-c rounded-lg bg-white hidden" : "m-0 p-0 absolute -left-2 top-12 shadow-c rounded-lg bg-white hidden"}
                    ref={dropRef}>
                    <li className={"p-5 hover:bg-blue-50 hover:text-blue-550 cursor-pointer rounded-t-lg"}>App
                        Development
                    </li>
                    <li className={"p-5 hover:bg-blue-50 hover:text-blue-550 cursor-pointer rounded-b-lg"}>Web
                        Development
                    </li>
                </ul>
                <li className={"nav-item hover:text-blue-550 cursor-pointer inline-block"}>Projects</li>
                <li className={"nav-item hover:text-blue-550 cursor-pointer inline-block"}>Reviews</li>
                <li className={"nav-item hover:text-blue-550 cursor-pointer inline-block"}>Blog</li>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <li className={"nav-item hover:text-blue-550 cursor-pointer inline-block"}>FAQ's</li>
                <li className={"nav-item hover:text-blue-550 cursor-pointer inline-block"}>Contacts</li>
                <li className={"nav-item phone hover:text-blue-550 cursor-pointer inline-block"}>
                    <a href="tel:+3212455850" className={!opened ? "nav-link phone" : "nav-link phone-mobile"}>(321)
                        245-5850</a>
                </li>
            </ul>
        </nav>
    </div>);
}

export default Navbar;
