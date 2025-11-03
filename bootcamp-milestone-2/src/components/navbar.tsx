import React from 'react';
import style from './navbar.module.css';
import Link from 'next/link';

export default function NavBar()
{
    return(
    <header>
        <nav className={style.navbar}>
            <h2 className={style.logo}>
                <a href="index.html">omar's website</a>
            </h2>
            <ul className={style.navlist}>
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    );
}