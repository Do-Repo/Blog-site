import { useState } from "react";
import { useParams , useHistory} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog, error, isLoading} = useFetch('http://localhost:8000/blogs/'+ id);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    function handleClick(e){
        setIsPending(true);
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method:'DELETE'
        }).then(()=>{
            setIsPending(false);
            history.push('/')
        })

    }

    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    {!isPending && <button onClick={handleClick}>Delete</button>}
                    {isPending && <button disabled>Deleting</button>}
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;