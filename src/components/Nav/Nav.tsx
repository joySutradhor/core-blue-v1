"use client";

import ThemeSwitcher from "@/app/ThemeSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Btn from "../utilites/btn";
import Image from "next/image";
import darkLogo from "../../public/assets/logo/1.webp"
import darkLight from "../../public/assets/logo/2.webp"

const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Service", path: "#service" },
    { name: "Blog", path: "#blog" },
    { name: "Pricing", path: "#pricing" },
    { name: "Contact", path: "#contact" },
];

export default function Nav() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="cb__nav__gap">
            <div className="cb__nav__container">
                {/* header Logo */}
                <div className="hidden dark:block">
                    <Image
                        height={100}
                        width={100}
                        layout="responsive"
                        alt="dark logo"
                        src={darkLight}
                    ></Image>
                </div>

                <div className="dark:hidden">
                    <Image
                        height={100}
                        width={100}
                        layout="responsive"
                        alt="dark logo"
                        src={darkLogo}
                    ></Image>
                </div>


                {/* Desktop Nav Bar */}
                <div className="cb__nav__desktop">
                    {links.map((link) => (
                        <div key={link.path}>
                            <Link
                                href={link.path}
                                className={`${link.path === pathname ? "active" : ""} cb__nav__desktopItem`}
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}

                </div>

                {/* Dark/Light Mode Toggle and DOC Button */}
                <div className="hidden lg:flex items-center space-x-4 ">
                    <div className="cb__nav__toggole__icon">
                        <ThemeSwitcher />
                    </div>
                    <Btn btnText="DOC" />
                </div>

                {/* Toggle Button for Mobile */}
                <div className="cb__nav__toggleMenu">
                    <button onClick={toggleNavMenu}>
                        {isOpen ? (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="cb__nav__mobile">
                    {links.map((link) => (
                        <Link key={link.path} href={link.path} className="cb_nav__mobileItem">
                            {link.name}
                        </Link>
                    ))}

                    {/* Theme Switcher and DOC Button on Medium Screens */}
                    <div className="cb__nav__mobile__wrapper">
                        <div className="cb__nav__toggole__icon">
                            <ThemeSwitcher />
                        </div>
                        <Btn btnText="DOC" />
                    </div>
                </div>
            )}
        </section>
    );
}
