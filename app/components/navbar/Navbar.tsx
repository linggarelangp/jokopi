"use client";

import React, { JSX } from "react";

import HamburgerMenu from "./HamburgerMenu";
import NavbarCollapse from "./NavbarCollapse";


const Navbar = (): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full ${scrolled ? "backdrop-blur-sm" : "backdrop-blur-none"}`}>
                <div className="flex px-7 lg:px-20 py-5 justify-between items-center">
                    <h1 className="text-2xl font-semibold tracking-wide text-black">PEJUANG</h1>

                    <HamburgerMenu
                        isOpen={isOpen}
                        toggleMenu={toggleMenu}
                    />

                </div>

                <NavbarCollapse isOpen={isOpen} scrolled={scrolled} />
            </nav>
        </>
    );
};

export default Navbar;