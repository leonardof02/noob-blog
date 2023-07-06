import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";
import { ReactNode } from "react";

interface HomeLayoutProps {
    children: ReactNode | ReactNode[];
}

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <>
            <Head>
                <title>{`< Noob Blog />`}</title>
            </Head>
            <Header />
            <div className="flex flex-col w-full px-4 mb-56 md:px-12">
                {children}
            </div>
            <Footer />
        </>
    );
};