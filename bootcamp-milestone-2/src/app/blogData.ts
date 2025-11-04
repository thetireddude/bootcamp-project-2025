// creating blog type
export type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

// creating blogs list
const blogs: Blog[] = [
    {
        title: "Completing the starter pack",
        date: "04-11-2025",
        description: "blog post that talks about completing the hack4impact starter pack",
        image: "/website.png",
        imageAlt: "screenshot of personal website",
        slug: "blog/completing-the-starter-pack"
    },
    {
        title: "Learning Typescript",
        date: "14-11-2025",
        description: "very first blog post about learning typescript",
        image: "/typescript1.png",
        imageAlt: "screenshot of vscode typescript project",
        slug: "blog/learning-typescript"
    }
];

export default blogs;