import Navbar from './Navbar';  
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './404';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'><Home /></Route>        
            <Route exact path='/create'><Create /></Route>  
            <Route exact path='/blog/:id'><BlogDetails /></Route>
            <Route exact path='*'><NotFound /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
