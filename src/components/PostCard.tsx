import React from "react";

import Link from "next/link";
import Image from "next/image";

import { PostMetaData } from "@/utils/types";

interface PostCardProps {
    data: PostMetaData;
}

export default function PostCard({ data }: PostCardProps) {
    return (
        <Link href={`posts/${data.id}`}>
            <div className="flex gap-4 transition border border-neutral-700 rounded-xl hover:bg-neutral-700 hover:-translate-y-1 hover:shadow-2xl">
                {data.imgURL && (
                    <Image
                        className="rounded-s-xl"
                        src={data.imgURL}
                        alt="Post Image"
                        width={200}
                        height={200}
                    />
                )}
                <div className="flex flex-col justify-center flex-1">
                    <h3 className="text-xl font-bold">{data.title}</h3>
                    {data.date && <h6> 🗓️ {data.date}</h6>}
                </div>
            </div>
        </Link>
    );
}
