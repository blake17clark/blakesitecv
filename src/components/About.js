import React from 'react';
import {Link} from "react-router-dom";

import '../App.css';

class About extends React.Component{
render(){
  return (
    <div className="App">
        <div className="topnav" id="myTopnav">
          <Link id="home" to="/">Home</Link>

          <Link className="active" to="/About/">About</Link>

          <Link to="/News/">News</Link>

          <Link to="/Contact/">Contact</Link>
          
          </div>
          <div className="background">
          <div className= "Patty">
          
          <br>
          </br>
          <p>
              Corporate TV and video work for Sandy City.
          </p>
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/289768833" width="640" height="360" frameborder="0" allowfullscreen></iframe>
          <br></br>
          <iframe src="https://player.vimeo.com/video/289774752" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <br></br>
          <iframe title="whodat" width="560" height="315" src="https://www.youtube.com/embed/gFH11JSWv-k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/n_V8duAv6B0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br></br> 
          <p>
              Corporate TV and video work for Utah Division of Air Quality.
          </p>
          <iframe src="https://player.vimeo.com/video/51310539" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <br></br>
          <p>Corporate Video and photography work for Vail Resorts </p>
          <br></br>
          <div class="row">
          <h2>
            <img
              src={require("../Scott Hero.png")} alt="scott" style={{ height: "300px" }}
            />
            </h2>
            <h2>
            <img
              src={require("../Scott3.jpg")} alt="scott" style={{ height: "300px" }}/>
            </h2>
            </div>
            <div class="row">
            <h2>
            <img
              src={require("../Sue Hero.png")} alt="scott" style={{ height: "300px" }}/>
          </h2>
          <h2>
            <img
              src={require("../Sue3.jpg")} alt="scott" style={{ height: "300px" }}
            />
          </h2>
          </div>
          <div class="row">
          <h2>
            <img
              src={require("../Scott2.jpg")} alt="scott" style={{ height: "300px" }}
            />
          </h2>
          <h2>
            <img
              src={require("../Scott1.jpg")} alt="scott" style={{ height: "300px" }}
            />
          </h2>
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FwJUfwfp2dU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1O1kYq5gEII" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/er5MByVYbPc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/w8iuxSEHSS0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>
              Flowing Freeride Online Snowboard School.
          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yib88ACUne4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/xaaLh71z4gw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_o-NmpRIE2M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/qW9nBismxIo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/BoxXjVIYhLU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ySgVqPZyqfE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QhUaN9L3xlg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/c-pPKcjy3Cs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6lnMUrQUFyY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/pu4C5EV_Tjc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1QiwEWHIIEU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/pyw6H9_MdJ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ryh2Hw4E2lA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wdqSdIQjWSU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br/>
          <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a href="https://www.facebook.com/blake.t.clark" class="fa fa-facebook"></a>
            <a href="https://www.youtube.com/channel/UCXbdLsa_eeLstY2TZEyWXdw" class="fa fa-youtube"></a>
            <a href="https://www.linkedin.com/in/blaketholenclark/" class="fa fa-linkedin"></a>
            <a href="https://twitter.com/@flowingfreeride" class="fa fa-twitter"></a>
          </div>
    </div>
    </div> 
    </div>
  );
}
}
export default About;
