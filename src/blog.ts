// creating blog type
type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

// creating blogs list
const blogs: Blog[] = [
    {
        title: "Completing the starter pack",
        date: "04-11-2025",
        description: "blog post that talks about completing the hack4impact starter pack",
        image: "res/website.png",
        imageAlt: "screenshot of personal website",
        slug: "blog/completing-the-starter-pack.html"
    },
    {
        title: "Learning Typescript",
        date: "14-11-2025",
        description: "very first blog post about learning typescript",
        image: "res/typescript1.png",
        imageAlt: "screenshot of vscode typescript project",
        slug: "blog/learning-typescript.html"
    }
]

// acessing and storing blog-container div
const blogContainer = document.getElementById('blog-container');

//const blogContainer = document.getElementById('blog-container')!;
    // non-null assertion to bypass Ts null checking, alternative way

// load up blogs from blog list
blogs.forEach((Blog) => {
    // creating the overall blog element
    const blog = document.createElement("div");

    // adding a class to the blog div
    blog.classList.add("blog");

    // creating the blog div's children
        // and assigning their contents
    const h1 = document.createElement("h1");
    h1.textContent = Blog.title;

    const img = document.createElement("img");
    img.src = Blog.image;
    img.alt = Blog.imageAlt;
    img.width = 700;

    const imgLink = document.createElement("a");
    imgLink.href = Blog.slug;
    // wrapping img within the anchor element
    imgLink.appendChild(img);

    const p = document.createElement("p");
    p.textContent = Blog.description

    // appending as children to the blog div
    blog.appendChild(h1);
    blog.appendChild(imgLink);  
    blog.appendChild(p);

    //appending the blog div to the container div
    // null checking to avoid Ts error
    if (blogContainer != null){
        blogContainer.appendChild(blog);
    }
})