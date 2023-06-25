import Head from "next/head";
import React, { ReactNode } from "react";

interface PostLayoutProps {
    title: string;
    children: ReactNode | ReactNode[];
}

export const PostLayout = ({ title, children }: PostLayoutProps) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
            </Head>
            {/* header */}
            <main>{ children }</main>
            {/* footer */}
        </>
    );
};
