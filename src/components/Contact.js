import React from 'react';
import {Link} from "react-router-dom";
import * as emailjs from 'emailjs-com';

import '../App.css';

class Contact extends React.Component{
    state = {
        firstName: "",
        lastName: "",
        email: "",
        content: ""
    };

    // handleSubmit = event => {
    //     event.preventDefault()    
    //     console.log("start of submit");
        
    //         fetch("http://localhost:4000", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'},
    //         body: JSON.stringify(this.state)    
    
        
    //     }).then(()=> this.resetform())
    // }
    
    handleChange = ({ target }) => {
        this.setState( { [target.name]: target.value } );
      };
     resetform = (e) => {
       e.preventDefault()
      emailjs.send(
        "gmail", "contact",
        this.state, "user_0nNsfJBF6xSvaKUFotdH9"
      )
         .then(alert ("I Will Respond Shortly Cheers!"))
         .then(document.location.reload(true))
    //     this.setState(
    //         {
    //             firstName: "",
    //             lastName: "",
    //             email: "",
    //             content: ""
    //         }
    //     )
     }  
    
      // componentDidMount(){
      //     // console.log("component did mount")
      // fetch('http://localhost:4000')
      // .then(function(response) {
      //   return response.json();
      // })
      // .then((myJson) => {
      //     // console.log("my Json")
      //   this.setState({
      //       contacts: myJson
      //   })
    
      //   console.log(JSON.stringify(myJson));
      // });
      // }

render(){
  return (
    <div className="App">
      <div className="background">
        
        <div className="topnav" id="myTopnav">
          <Link  id="home" to="/"> Home</Link>

          <Link to="/About/">About</Link>

          <Link  to="/News/">News</Link>

          <Link className="active" to="/Contact/">Contact</Link>
          </div>
        <div className = "Patty">
          <br></br>
          <div id="container">
<p className="p"><a href="https://en.wikipedia.org/wiki/Red">
    <em className="word">Send Me Feedback!</em>
  </a></p>
</div>
        </div>
        <br>
        </br>
      <div className="flex">
          <div className = "form">
            <form id="jerry" onSubmit={this.resetform} >
                
            <br></br>
            <input
                type="input"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              />
              <br></br>
              <br></br>
              <input
                type="input"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                required
              />  
              <br></br>  
              <br></br>
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <br></br>
              <br></br>
            <textarea
            rows = "5" cols = "50" name = "description"
            className="content"
            type="input"
            placeholder="Content"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            required
          />     
           <br></br>     
                <button type="submit" value="send">Send</button>
                <br></br>
                <br></br>
                
            </form>
        </div>
        </div>
        <h3 className="flex">
            <img className="circle" id="" src={require("../BlakeTClark.jpg")} alt="blake" style={{ height: "250px" }}/>
          </h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
            <a href="https://vimeo.com/blaketholenclark" className="fa fa-vimeo"></a>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a href="https://www.facebook.com/blake.t.clark" className="fa fa-facebook"></a>
            <a href="https://www.youtube.com/channel/UCXbdLsa_eeLstY2TZEyWXdw" className="fa fa-youtube"></a>
            <a href="https://www.linkedin.com/in/blaketholenclark/" className="fa fa-linkedin"></a>
            <a href="https://twitter.com/@flowingfreeride" className="fa fa-twitter"></a>
          </div>
          </div>
            </div>
   
  );
  
  

}

}


export default Contact;
