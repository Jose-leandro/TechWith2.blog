import Image from "next/image";
import React from "react";
import NavMenu from "./navMenu";

export default function Header() {
    return (
        <header className="p-4 border-b flex justify-around items-center gap-4">
            <Image src="/logo.png" alt="TechWith2 Logo" width={90} height={60} />
            <input
                placeholder="What Tech Topic Are You Curious About?"
                className="bg-transparent border border-black px-4 py-2 w-full max-w-md"
            />
            <NavMenu />
        </header>
    )
}