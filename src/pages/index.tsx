import { getAllPostMetaData } from "@/utils/getAllPostMetadata";
import { PostMetaData } from "@/utils/types";

interface HomeProps {
    postsMetaData: PostMetaData[];
}

export default function Home({ postsMetaData }: HomeProps) {
    return (
        <>
            <div>Hello World!</div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores possimus
                libero sit facere, velit reiciendis? Praesentium repellat ratione voluptate
                veritatis illum, error quasi expedita optio mollitia. Alias praesentium aut
                laboriosam.
            </div>
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
