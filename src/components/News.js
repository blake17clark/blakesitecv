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
          <h1>This is my personal site but here is my Online Snowboard School Blog. Enjoy!</h1>
          </div>
          <div className="flex">
          <h1>Website: <a className="red" href="https://flowingfreeride.com/free-snowboard-tips/">
                Flowing Freeride Tips & Bribes</a>
          </h1>
          </div>
          <div className="flex">   
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a href="https://www.facebook.com/blake.t.clark" class="fa fa-facebook"></a>
            </div>
           <div className="flex">
            <a href="https://www.youtube.com/channel/UCXbdLsa_eeLstY2TZEyWXdw" class="fa fa-youtube"></a>
            </div>
            <div>
            <div className = "flex" id="div3">
            <a href="https://www.linkedin.com/in/blaketholenclark/" class="fa fa-linkedin"></a>
            </div>
            <div div className = "flex" id="div4">
            <a href="https://twitter.com/@flowingfreeride" class="fa fa-twitter"></a>
            </div>
            <div className = "flex" id="div5">
            <a href="https://vimeo.com/blaketholenclark" class="fa fa-vimeo"></a>
            </div>
            <br/> 
          <br/> 
          <br/> 
           

          </div> 
          
    </div>
    </div>
  );
  
}
}

export default News;

