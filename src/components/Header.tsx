import Link from "next/link";
import { useState } from "react";

export const Header = () => {

    const [ isOpen, setOpen ] = useState<boolean>(false);

    const links = [
        {
            link: "#",
            label: "Mierda Seca"
        },
        {
            link: "#",
            label: "La verdad"
        },
        {
            link: "#",
            label: "Sobre Mi"
        }
    ]

    return (
        <header className="flex items-center mb-12 bg-neutral-900 min-h-fit p-7">
            <div className="flex flex-col items-center justify-between w-full md:flex-row">
                <span className="flex gap-4 m-3 text-3xl font-extrabold text-center">
                    <p className="font-bold text-blue-800">{"<"}</p>
                    <p>NOOB BLOG</p>
                    <p className="font-bold text-blue-800">{"/>"}</p>
                </span>
                <nav className="flex flex-col gap-5 md:flex-row">
                    <ul className={`flex flex-col w-full gap-4 overflow-hidden md:flex-row transition-all md:h-fit ${ !isOpen && "h-0" }`}>
                        { links.map( (link, index) =>
                            <Link href={ link.link } key={ index } className="mx-3">
                                <li className="box-border transition-all duration-75 hover:outline-offset-8 hover:outline outline-blue-800">
                                    {link.label}
                                </li>
                            </Link>
                        )}
                    </ul>
                    <button className="w-full font-extrabold border md:hidden border-neutral-300 hover:bg-neutral-300 hover:text-neutral-900"
                    onClick={() => setOpen( ! isOpen )}
                    >...</button>
                </nav>
            </div>
        </header>
    );
};
