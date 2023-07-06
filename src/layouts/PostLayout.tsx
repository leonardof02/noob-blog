import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
            <Header />
            <div className="flex flex-col mx-4 mb-56 md:mx-12">
                {children}
            </div>
            <Footer />
        </>
    );
};