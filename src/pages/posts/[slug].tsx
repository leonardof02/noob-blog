import { PostLayout } from "@/layouts/PostLayout";
import { getAllSlugs } from "@/utils/getAllSlugs";
import React from "react";
import { getBlogPostContent } from "@/utils/getBlogPostContent";
import { remark } from "remark";
import html from "remark-html"
import { PostMetaData } from "@/utils/types";

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

export const getStaticProps = async ({ params }: { params: {slug: string }}) => {
    const { content, data } = getBlogPostContent( params.slug );
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        props: {
            content: contentHtml,
            data
        }
    };
};

const Post = ({ content, data }: PostProps) => {
    return (
        <>
            <PostLayout title={data.title}>
                <h1>{data.title}</h1>
                <h2>{data.date}</h2>
                <div dangerouslySetInnerHTML={ {__html: content} }></div>
            </PostLayout>
        </>
    );
};
export default Post;
