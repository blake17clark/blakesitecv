import React from 'react';
import './App.css';
import Routing from "./Routing";

function App() {
  // let myStyle = {
  //   borderStyle: "dotted dash",
  //   marginTop: "0px",
  //   marginBottom: "10px",
  //   position: "absolute",
  //   right: "40%"
  // };
  return (
    <div>
    {/* <div style={myStyle}>Blake Tholen Clark</div> */}
    <div className="App">
      
     <Routing/> 
    </div>
    </div>
  );
}

export default App;
