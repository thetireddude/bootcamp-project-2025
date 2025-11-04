import React from 'react';
import style from '@/components/blogPreview.module.css';
import { Blog } from '@/app/blogData';
import Image from "next/image";


export default function BlogPreview(blog : Blog){
    return(
        <div className={style.blog}>
            <h1>{blog.title}</h1>
            <a href={blog.slug}>
                <Image src={blog.image} alt={blog.imageAlt} width={700} height={500}></Image>
            </a>
            <p>{blog.description}</p>
        </div>
    );
}