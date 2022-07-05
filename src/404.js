import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oopsie!</h2>
            <p>We couldn't find the page you're looking for</p>
            <Link to="/">Back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;