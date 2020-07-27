import React from 'react';
// import {Link} from "react-router-dom";
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
        
 
        <div className = "Patty">
          <br></br>
          <div id="container">
<p className="p">
    <em id="rokkitt">For Booking/Avavailability Fill Out This Form</em>
  </p>
</div>
        </div>
        <br>
        </br>
      <div className="flex">
          <div className = "form">
            <form onSubmit={this.resetform} >
                
            <br></br>
            <input
                type="input"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              />
          
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
                type="input"
                placeholder="Subject"
                name="subject"
                value={this.state.subject}
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
            className="subject"
            type="input"
            placeholder="Content"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            required
          />     
           <br></br>     
                <button type="submit" className="btn btn-outline-secondary" value="send"><i className="fas fa-paper-plane"></i> Send</button>
                <br></br>
                <br></br>
                
            </form>
        </div>
        </div>
        <br></br>
        <h3 className="flex">
            <img className="circle" id="" src={require("../BlakeTClark.jpg")} alt="blake" style={{ height: "250px" }}/>
          </h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="flex">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a href="https://vimeo.com/blaketholenclark" target="blank"><i className="fab fa-vimeo" id="bigger"></i></a>
            <a href="https://www.facebook.com/blake.t.clark" target="blank"><i className="fab fa-facebook-square" id="bigger"></i></a>
            <a href="https://www.youtube.com/channel/UCXbdLsa_eeLstY2TZEyWXdw" target="blank"><i className="fab fa-youtube" id="bigger"></i></a>
            <a href="https://www.linkedin.com/in/blaketholenclark/" target="blank"><i className="fab fa-linkedin-in" id="bigger"></i></a>
            <a href="https://twitter.com/@flowingfreeride" target="blank"><i className="fab fa-twitter-square" id="bigger"></i></a>
          </div>
          </div>
            </div>
   
  );
  
  

}

}


export default Contact;
