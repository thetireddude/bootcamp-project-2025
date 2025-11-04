import NavBar from '@/components/navbar';
import PageTitle from '@/components/pageTitle';
import BlogPreview from '@/components/blogPreview';
import blogs from '@/app/blogData';


export default function Blog(){
    return(
        <div>
            <PageTitle title="My Blog"/>
            {blogs.map(blog =>
                <div key={blog.slug} className="blog-container">
                    <BlogPreview {...blog}/>
                </div>
            )}
        </div>
    );
}