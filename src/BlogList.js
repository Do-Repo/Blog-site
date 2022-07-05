import { Link } from "react-router-dom";

const Bloglist = ({blogs}) => {

    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <Link to={`blog/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                    <p>Written by {blog.author}</p>
                </Link>
                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;