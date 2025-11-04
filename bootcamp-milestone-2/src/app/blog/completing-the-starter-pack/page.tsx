import style from '@/components/blogPreview.module.css';
import Image from "next/image";
import Link from 'next/link';
import blogs from '@/app/blogData';


export default function Page(){
    const blog = blogs[0];
    return(
        <div className={style.blog}>

            <div className={style.blogImage}>
                <Image src={blog.image} alt={blog.imageAlt} width={400} height={300}></Image>
            </div>

            <div className={style.blogAbout}>
                <h1>{blog.title}</h1>
                <span className={style.date}>{blog.date}</span>
                <p className={style.description}>{blog.description}</p>
            </div>
        </div>
    );
}