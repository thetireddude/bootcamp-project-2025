import React from 'react';
import style from '@/components/blogPreview.module.css';
import { Blog } from '@/app/blogData';
import Image from "next/image";


export default function BlogPreview(blog : Blog){
    return(
        <div className={style.blog}>

            <div className={style.blogImage}>
                <a href={blog.slug}>
                    <Image src={blog.image} alt={blog.imageAlt} width={400} height={300}></Image>
                </a>
            </div>

            <div className={style.blogAbout}>
                <h1>{blog.title}</h1>
                <span className={style.date}>{blog.date}</span>
                <p>{blog.description}</p>
            </div>
        </div>
    );
}