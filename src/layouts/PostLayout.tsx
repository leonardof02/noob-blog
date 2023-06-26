import Head from "next/head";
import { ReactNode } from "react";

interface PostLayoutProps {
    title: string;
    children: ReactNode | ReactNode[];
}

export default function PostLayout({ title, children }: PostLayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {/* header */}
            <div className="flex flex-col mx-8 mb-56 md:mx-12">
                {children}
            </div>
            {/* footer */}
        </>
    );
};