import Link from "next/link";

export const Header = () => {

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
                <span className="flex gap-4 text-3xl font-extrabold">
                    <p className="font-bold text-blue-800">{"<"}</p>
                    <p>NOOB BLOG</p>
                    <p className="font-bold text-blue-800">{"/>"}</p>
                </span>
                <nav>
                    <ul className="flex gap-4">
                        { links.map( (link, index) =>
                            <Link href={ link.link } key={ index } className="mx-3">
                                <li className="box-border transition-all duration-75 hover:border-b-2 border-b-blue-800">
                                    {link.label}
                                </li>
                            </Link>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
