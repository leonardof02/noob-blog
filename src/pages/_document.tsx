import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
                />
            </Head>
            <body className="bg-neutral-800 text-neutral-300">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
