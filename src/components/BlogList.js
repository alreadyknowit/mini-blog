import {Link} from "react-router-dom";

export default function BlogList({blogs, title}) {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>

                    <Link to={`blogs/${blog.id}`}>
                        <article>
                            <h1>{blog.title}</h1>
                            <h5>{blog.body}</h5>
                            <h3 className="author">{blog.author}</h3>
                        </article>
                    </Link>

                </div>

            ))}

        </div>
    );
}
