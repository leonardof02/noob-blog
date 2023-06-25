import { getAllPostMetaData } from "@/utils/getAllPostMetadata";
import { PostMetaData } from "@/utils/types";

interface HomeProps {
    postsMetaData: PostMetaData[];
}

export default function Home({ postsMetaData }: HomeProps) {
    return (
        <>
            <div>Hello World!</div>
            {postsMetaData.map(data => (
                <div>
                    <h3>{data.title}</h3>
                    {data.date && <h6>{data.date}</h6>}
                </div>
            ))}
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
