import React from 'react';
import {Link} from "react-router-dom";
import logo from "../Img/SnowboardSkullSign.png"
import '../App.css';





class News extends React.Component{
render(){
  return (
    <div className="Logo">
        
        <div className="topnav" id="myTopnav">
          <Link  id="home" to="/"> Home</Link>

          <Link to="/About/">About</Link>

          <Link className="active" to="/News/">News</Link>

          <Link to="/Contact/">Contact</Link>
          </div>
        
          {/* <img src={logo} alt="logo" /> */}
          

          
          <div className= "Patty">
          This is my personal site but here is my Online Snowboard School Blog. Enjoy!
          <p>
              Website:{" "}
              <a className="blue" href="https://flowingfreeride.com/free-snowboard-tips/">
                Flowing Freeride Tips & Bribes
              </a>{" "}
          </p>
          {/* <p><strong>Note:</strong> The animation-timing-funtion property is not supported in Internet Explorer 9 and earlier versions.</p> */}



            <br/> 
            <br/>     
          
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div className = "easyin" id="div1">
            <a href="https://www.facebook.com/blake.t.clark" class="fa fa-facebook"></a>
            <br/>
            <br/>
            </div>
            <div div className = "easyin" id="div2">
            <a href="https://www.youtube.com/channel/UCXbdLsa_eeLstY2TZEyWXdw" class="fa fa-youtube"></a>
            </div>
            <div className = "easyin" id="div3">
            <a href="https://www.linkedin.com/in/blaketholenclark/" class="fa fa-linkedin"></a>
            </div>
            <div div className = "easyin" id="div4">
            <a href="https://twitter.com/@flowingfreeride" class="fa fa-twitter"></a>
            </div>
            <div className = "easyin" id="div5">
            <a href="https://vimeo.com/blaketholenclark" class="fa fa-vimeo"></a>
            </div>
            <br/> 
          <br/> 
          <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/>    
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/>   
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/>
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            <br/>  

          </div> 
          
    </div>
    
  );
  
}
}

export default News;

