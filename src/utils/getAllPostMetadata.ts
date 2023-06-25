import fs from "fs"
import path from "path";

import grayMatter from "gray-matter"

import { POSTS_DIRECTORY, PostMetaData } from "./types";

export const getAllPostMetaData = (): PostMetaData[] => {
    const postsFileNames = fs.readdirSync(POSTS_DIRECTORY);
    const postMetaData: PostMetaData[] = postsFileNames.map( file => {
        const fullPath = path.join(POSTS_DIRECTORY, file);
        const postContent = fs.readFileSync( fullPath, "utf8" );
        const { data } = grayMatter(postContent);
        return data as PostMetaData;
    });
    return postMetaData;
}