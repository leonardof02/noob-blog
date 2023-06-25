import fs from "fs";
import path from "path";

import grayMatter from "gray-matter";

import { BlogPost, POSTS_DIRECTORY, PostMetaData } from "./types";

export const getBlogPostContent = (slug: string): BlogPost => {
    const fullPath = path.join(POSTS_DIRECTORY, `${slug}.md`);
    const postContent = fs.readFileSync(fullPath, "utf8");
    const { data, content } = grayMatter(postContent);
    return {
        data: data as PostMetaData,
        content
    };
};
