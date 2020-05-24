import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import News from "./components/News";
import Resume from "./components/Resume";

class Routing extends React.Component{

    render() {
  return (
    <Router>
      <div>
        <nav>
        <div className="topnav" id="myTopnav">
          <Link  id="home" to="/">Home</Link>

          <Link  to="/About/">About</Link>

          <Link to="/News/">News</Link>

          <Link to="/Resume/">Resume</Link>

          <Link to="/Contact/">Contact</Link>
          <Link className="myname" to="">Blake Tholen Clark</Link>
          
          </div>
        
          
        </nav>


      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About/" component={About} />
        <Route path="/Contact/" component={Contact} />
        <Route path="/News/" component={News} />
        <Route path="/Resume/" component={Resume} />
        </Switch>
    </Router>
  );
}
}
export default Routing;