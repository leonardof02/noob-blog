import HomeLayout from "@/layouts/HomeLayout";
import { getAllPostMetaData } from "@/utils/getAllPostMetadata";
import { PostMetaData } from "@/utils/types";

import Link from "next/link";
import Image from "next/image";

interface HomeProps {
    postsMetaData: PostMetaData[];
}

export default function Home({ postsMetaData }: HomeProps) {
    return (
        <>
            <HomeLayout>
                <div className="flex flex-col items-center justify-center w-full">
                    <Image
                        src="https://avatars.githubusercontent.com/u/84308529?s=400&u=ccfd67417dc5764d4060d80503b7e0bbd5db6b24&v=4"
                        width={300}
                        height={300}
                        alt="Github Profile Image"
                        className="mb-10 rounded-full shadow-xl"
                    />
                </div>
                <h1 className="m-5 text-4xl font-bold"> 👋 Hello World!</h1>
                <p className="text-xl">
                    Soy Leo, 🇨🇺 Cubano, 📚 Estudiante, 🧑🏻‍💻 Programador autodidacta, 🐧 Usuario de Linux y 🧑🏻‍🏫
                    Estudiante de Ingeniería Informática en la UCI. Actualmente estoy en proceso
                    de convertirme en desarrollador full stack y este blog es para compartir mi
                    aprendizaje y mis tropiezos.
                </p>
                <hr className="my-10"/>
                <section>
                    <h4 className="mb-5 text-2xl font-bold">📰 Mis Posts:</h4>
                    {postsMetaData.map((data, index) => (
                        <Link key={index} href={`posts/${data.id}`}>
                            <div>
                                <h3>{data.title}</h3>
                                {data.date && <h6>{data.date}</h6>}
                            </div>
                        </Link>
                    ))}
                </section>
            </HomeLayout>
        </>
    );
}

export const getStaticProps = async () => {
    const allPostsMetadata = getAllPostMetaData();
    return {
        props: {
            postsMetaData: allPostsMetadata
        }
    };
};
