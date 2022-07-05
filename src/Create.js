import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("Mario");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        var blog = {title, content, author};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsLoading(false)
            history.push('/');
        });
    }

    return ( 
        <div className="create">
            <h2>Create a new blog</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="">Blog title</label>
            <input type="text" required value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            <label htmlFor="">Blog content</label>
            <textarea cols="30" rows="10" required value={content} onChange={(e)=> {setContent(e.target.value)}}></textarea>
            <label htmlFor="">Blog author</label>
            <select value={author} onChange = {(e)=>{setAuthor(e.target.value)}}>
                <option value="Mario">Mario</option>
                <option value="Yoshi">Yoshi</option>
            </select>
            {!isLoading && <button>Add Blog</button>}
            {isLoading && <button disabled>Adding Blog</button>}
            </form>
            
        </div>
     );
}
 
export default Create;