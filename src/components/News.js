import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';





class News extends React.Component{
render(){
  return (
    <div>
        
        <div className="topnav" id="myTopnav">
          <Link  id="home" to="/"> Home</Link>

          <Link to="/About/">About</Link>

          <Link className="active" to="/News/">News</Link>

          <Link to="/Contact/">Contact</Link>
          </div>
       <div className="Logo">

         
          <div className= "flex">
            
          <h1>This is my Online Snowboard School Blog Flowing Freeride. Enjoy!</h1>
          </div>
          <div className="flex">
            
            <h1>Website: <a className="red" href="https://flowingfreeride.com/free-snowboard-tips/">
                  Flowing Freeride Tips & Bribes</a>
            </h1>
            </div>
          <div id="container">
<p className="p"><a href="https://en.wikipedia.org/wiki/Red">
    <em id="word">Welcome To My Site!</em>
  </a></p>
</div>


            <div className = "flex" id="div5">
            <a href="https://vimeo.com/blaketholenclark" className="fa fa-vimeo"></a>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a href="https://www.facebook.com/blake.t.clark" className="fa fa-facebook"></a>
            <a href="https://www.youtube.com/channel/UCXbdLsa_eeLstY2TZEyWXdw" className="fa fa-youtube"></a>
            <a href="https://www.linkedin.com/in/blaketholenclark/" className="fa fa-linkedin"></a>
            <a href="https://twitter.com/@flowingfreeride" className="fa fa-twitter"></a>
          </div>
            <br/> 
          <br/> 
          <br/> 
           

          </div> 
          
    </div>
    
  );
  
}
}

export default News;

