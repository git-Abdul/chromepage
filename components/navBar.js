"use client";
import Link from "next/link";
import { useState } from "react";

export function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <>
            {/* Navbar */}
            <nav className="bg-fixed text-white backdrop-blur-md select-none fixed w-full top-0 z-10">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6">
                    <Link href={"/"} className="flex items-center m-1">
                        <h1 className="text-4xl xl:block hidden font-borel mt-16 -ml-32 font-bold">Abdul</h1>
                    </Link>
                </div>
            </nav>
        </>
    )
};
