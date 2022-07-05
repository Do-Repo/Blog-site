
import Bloglist from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    function checkForBlogs(blogs){
        if(blogs.length === 0){
            return false;
        }else {return true}
    }

    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            { isLoading && <div>Loading...</div> }
            { blogs && !checkForBlogs(blogs) && <div>Nothing to show...</div> }
            { blogs && <Bloglist blogs = {blogs}/> }
        </div>
     );
}
 
export default Home;