import path from "path";

// Constants
export const POSTS_DIRECTORY = path.join(process.cwd(), 'src' ,'posts');

export interface PostMetaData {
    title: string,
    date?: string
}

export interface BlogPost {
    data: PostMetaData,
    content: string
}

