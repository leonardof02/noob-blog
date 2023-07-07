import React from "react";

import Link from "next/link";
import Image from "next/image";

import { PostMetaData } from "@/utils/types";

interface PostCardProps {
    data: PostMetaData;
}

export default function PostCard({ data }: PostCardProps) {
    return (
        <Link href={`posts/${data.id}`} className="flex justify-center md:justify-normal">
            <div className="flex flex-col max-w-xs transition border md:flex-row md:max-w-full border-neutral-700 rounded-xl hover:bg-neutral-700 hover:-translate-y-1 hover:shadow-2xl">
                
                {data.imgURL && (
                    <div className="w-full sm:w-fit">
                        <Image
                            className="object-cover max-w-full md:max-w-sm me-5 rounded-t-xl md:rounded-s-xl"
                            src={data.imgURL}
                            alt="Post Image"
                            width={350}
                            height={350}
                        />
                    </div>
                )}
                <div className="flex flex-col justify-center gap-3 p-3">
                    <h3 className="text-xl font-bold">{data.title}</h3>
                    <div className="flex flex-col gap-2 w-fit md:flex-row">
                        {data.tags &&
                            data.tags.map((tag, index) => (
                                <p
                                    key={index}
                                    className="p-1 font-bold bg-blue-700 text-neutral-300"
                                >
                                    #{tag}
                                </p>
                            ))}
                    </div>
                    {data.date && <h6> 🗓️ {data.date}</h6>}
                </div>
            </div>
        </Link>
    );
}
