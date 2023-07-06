import Link from "next/link";

export const Footer = () => {
    return <footer className="flex justify-center text-center bg-neutral-900 min-h-fit p-7">
        <div className="flex flex-col items-center justify-center">
            <b>Made with ❤️ by Leonardo Arencibia 🇨🇺 🖥️</b>
            <Link className="flex items-center" href={"https://github.com/leonardof02"}>
                <i className="devicon-github-original"></i>
                <p className="m-0">leonardof02</p>
                </Link>
        </div>
    </footer>;
};
