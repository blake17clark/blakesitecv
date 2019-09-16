import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import News from "./components/News";

class Routing extends React.Component{

    render() {
  return (
    <Router>
      <div>
        <nav>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About/" component={About} />
        <Route path="/Contact/" component={Contact} />
        <Route path="/News/" component={News} />
        </Switch>
          
        </nav>


      </div>
    </Router>
  );
}
}
export default Routing;