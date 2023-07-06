import { remark } from "remark";
import html from "remark-html";

import Image from "next/image";

import { PostMetaData } from "@/utils/types";

import { getAllSlugs } from "@/utils/getAllSlugs";
import { getBlogPostContent } from "@/utils/getBlogPostContent";

import PostLayout from "@/layouts/PostLayout";

interface PostProps {
    content: string;
    data: PostMetaData;
}

export const getStaticPaths = async () => {
    const paths = getAllSlugs().map(slug => {
        return {
            params: {
                slug
            }
        };
    });
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
    const { content, data } = getBlogPostContent(params.slug);

    const processedContent = await remark()
        .use(html)
        .use({
            settings: {
                sanitize: false
            }
        })
        .process(content);
    
        const contentHtml = processedContent.toString();

    return {
        props: {
            content: contentHtml,
            data
        }
    };
};


export default function Post({ content, data }: PostProps) {
    return (
        <>
            <PostLayout title={data.title}>
                <h1 className="p-3 mt-5 text-5xl font-extrabold md:text-6xl bg-inherit">
                    <span className="m-2 text-blue-700">_</span>
                    {data.title}
                </h1>
                <ul className="flex flex-col max-w-3xl gap-1 m-2 text-lg font-normal md:items-center md:flex-row justify-evenly">
                    <li className="px-3 py-1 font-extrabold">🗓️ {data.date}</li>
                    <li className="px-3 py-1 text-blue-600 bg-blue-800 bg-opacity-25 border border-blue-800 rounded-md w-fit">
                        #Mierda
                    </li>
                </ul>
                <div className="max-w-3xl text-xl" id="post-content">
                    { data.imgURL && <Image src={ data.imgURL } alt="Post related image" width={1366} height={760} /> }
                    <article dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </PostLayout>
        </>
    );
}
