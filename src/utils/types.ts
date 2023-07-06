import path from "path";

// Constants
export const POSTS_DIRECTORY = path.join(process.cwd(), 'src' ,'posts');

export interface PostMetaData {
    id: string
    title: string,
    date?: string
    imgURL?: string
}

export interface BlogPost {
    data: PostMetaData,
    content: string
}

