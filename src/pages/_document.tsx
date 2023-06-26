import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css"
                />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js"></script>
            </Head>
            <body className="bg-neutral-800 text-neutral-300">
                <Main />
                <NextScript />
            </body>
            <script>
                Prism.highlightAll();
            </script>
        </Html>
    );
}
