var blogs = [
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
];
var blogContainer = document.getElementById('blog-container');
//const blogContainer = document.getElementById('blog-container')!;
// non-null assertion to bypass Ts null checking, alternative way
blogs.forEach(function (Blog) {
    // creating the overall blog element
    var blog = document.createElement("div");
    // adding a class to the blog div
    blog.classList.add("blog");
    // creating the elements an that will be inside the blog div
    // and assigning their contents
    var h1 = document.createElement("h1");
    h1.textContent = Blog.title;
    var img = document.createElement("img");
    img.src = Blog.image;
    img.alt = Blog.imageAlt;
    img.width = 700;
    var imgLink = document.createElement("a");
    imgLink.href = Blog.slug;
    imgLink.appendChild(img);
    var p = document.createElement("p");
    p.textContent = Blog.description;
    // appending as children to the blog div
    blog.appendChild(h1);
    blog.appendChild(imgLink);
    blog.appendChild(p);
    //appending the blog div to the container div
    // null checking to avoid Ts error
    if (blogContainer != null) {
        blogContainer.appendChild(blog);
    }
});
