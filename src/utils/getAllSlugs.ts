import fs from "fs"
import path from "path";

import grayMatter from "gray-matter"

import { POSTS_DIRECTORY, PostMetaData } from "./types";

export const getAllSlugs = (): string[] => {
    const postsFileNames = fs.readdirSync(POSTS_DIRECTORY);
    const slugs = postsFileNames.map( fileName => fileName.replace(/\.md$/, '') );
    return slugs;
}