import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="topnav" id="myTopnav">
          <Link className="active" id="home" to="/">Home</Link>

          <Link to="/About/">About</Link>

          <Link to="/News/">News</Link>

          <Link to="/Contact/">Contact</Link>
        </div>
        <>
        <div className="background">
          <div className= "Patty">   
          {/* <div className="topnav" id="myTopnav">
  <a href="#home" className="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="..." className="icon" onclick="myFunction()">
    <i className="fa fa-bars"></i>
  </a>
</div>     */}
        
          <br />
          <br />
          <div className="flex">
          <div id="container" >
<p className="p"><a href="https://en.wikipedia.org/wiki/Red">
    <em id="word">Blake Tholen Clark</em>
  </a></p>
<div className="flex">
          <h1 className="red" id="rokkitt">
            Filmmaker TV Producer/Director
            | Full Stack Developer
          </h1>
          </div>
          </div>
          </div>
          <hr></hr>
          <div className="flex" id="rokkitt">
          <br></br>
          <h1 id="rokkitt">Experienced in Corporate and Independent Productions: 801.712.2824</h1>
          </div>
            <div className="flex">
              <div className="container">
            <h3>
            <img className="round" id="image" src={require("../BlakeTClark.jpg")} alt="blake" style={{ height: "150px" }}/>
          </h3>
          <div className="middle">
            <div className="text">
            <a className="blue" id="word" href="https://flowingfreeride.com/" target="_blank"> Welcome! Come Snowboarding Mates!</a>
            </div>
          </div>
          </div>

          </div>
          <div className="flex" id="rokkitt">
            <h1>
            <a className="blue" href="https://vimeo.com/blaketholenclark" target="_blank"> REELS |</a>
            <a className="blue" href="https://www.linkedin.com/feed/" target="_blank"> LINKEDIN |</a>
            <a className="blue" href="https://github.com/blake17clark" target="_blank"> GitHub |</a>
            <a className="blue"> Blake.17clark@gmail.com</a>
          </h1>
          </div>
          <hr />
          <br />
          <div className="flex" id="rokkitt">
          <section className="neg3">
          <h1 className="red"><strong>PROJECTS</strong></h1>
          <p><strong>Ambi Quality Assurance</strong> | Salt Lake City, Utah | Assistant Developer| 7/2019–Present</p>
            <li>Ran QA tests on Ambi platform to debug student interaction platform</li>
            <li>
            Created different types of functionality for Ambi UI using Jira, QA and Agile
            </li>
            <br/>
            <p>
              <strong>Portfolio Website</strong> | Developer | Salt Lake City, Utah | 7/2019–Present {" "}
            </p>
            <li>
            Wrote code HTML, Java Script, CSS and React in Visual Studio Code, this website
            </li>
            <li>
            Stylized site to be visually appealing, functions & hosts my CV content online
            </li>
            <br/>
            <p><strong>Job Track App</strong> | Web Developer | Salt Lake City, Utah | 7/2019–Present {" "}</p>
            <li>
            Developed job tracker full stack app with mob programming group style with functioning CRUD at Helio 
            </li>
            </section>
            </div>

            <br/>
            <div className="flex" id="rokkitt">
            <section> 
            <h1 className="red"><strong>FILM AWARDS EARNED 2018</strong></h1><strong>48 Hour Film Project 2018</strong> | SLC, Utah | Director of Photography & Editing | P.O.V {" "}
            <li>
            Handled production & editing, camera-operation, sound, lighting, outdoor shoot etc.
            </li>
            <li>
            Awarded: Best Cinematography, Effects (editing), Acting, Best Overall Film (2nd place) 
            </li>
            <br/>
            <iframe src="https://player.vimeo.com/video/281366586" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </section>
            </div>
            <br />
           <div className="flex" id="rokkitt">
             <section>
          <h1 className="red"><strong>EXPERIENCE</strong></h1>
            <p><strong>Flowing Freeride</strong> | Park City, Utah | Head Developer & Spokesperson | 5/2013–Present</p>
            <li>
              Developed & launched passion project of online video snowboard
              training series
            </li>
            <li>
              Managed all levels of production: scripts & planning, filming,
              editing, distribution
            </li>
            <li>
              Acted as project spokesperson, course instructor, on-air talent,
              business management
            </li>
            <p>
              Websites:{" "}
              <a className="blue" href="https://flowingfreeride.com/" target="_blank">
                Flowingfreeride.com,
              </a>{" "}
              <a className="blue" href="https://www.youtube.com/channel/UCXbdLsa_eeLstY2TZEyWXdw/featured" target="_blank">
                Flowing Freeride YouTube
              </a>{" "}
              <a className="blue" href="https://snowboardclass.com/" target="_blank">
                & Snowboardclass.com
              </a>
            </p>
            <iframe width="640" height="360" src="https://www.youtube.com/embed/wdqSdIQjWSU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </section>
          </div>
          <br />
          <div className="flex" id="neg">
          <section id="rokkitt">
            <p>
              <strong>Park City/Vail Resorts</strong> | Park City, Utah | 
              <br></br>
              TV
              Producer/Snowboard Coach | 1/1999-Present
            </p>
            <li>
              Setup TV studio: Lighting, cameras, mics, greenscreen, drapes,
              etc.,
            </li>
            <li>
              Acted as Director/Producer organizing interviews, writing content,
              coaching
            </li>
            <li>
              Worked with a small post-production team to edit/create
              entertaining segments
            </li>
            <p>
              Video Work:{" "}
              <a className="blue" href="https://youtu.be/1O1kYq5gEII" target="_blank">
                Pond Skim,
              </a>{" "}
              <a className="blue" href="https://www.youtube.com/watch?v=FwJUfwfp2dU" target="_blank">
                Teaching Model
              </a>{" "}
              <a className="blue" href="https://www.youtube.com/watch?v=er5MByVYbPc" target="_blank">
                {" "}
                & Spring Conditons.
              </a>
            </p>
            </section>
            </div>
            <br />
            <div className="flex" id="rokkitt">
            <section id="neg">
            <p>
              <strong>Sandy City</strong> | Sandy, Utah | Freelance TV Producer
              | 8/2018-11/2018
            </p>
            <li>
              Directed talent, camera work, edited and produced several
              corporate videos
            </li>
            <p>
              Video Work:{" "}
              <a className="blue" href="https://www.youtube.com/watch?v=gFH11JSWv-k&t=11s" target="_blank">
                Scald Burns,
              </a>{" "}
              <a className="blue" href="https://www.youtube.com/watch?v=-mM5l0pdfWA" target="_blank">
                Remember 9-11
              </a>{" "}
              <a className="blue" href="https://www.youtube.com/watch?v=i8mCnmAkQRE" target="_blank">
                {" "}
                & Healing Field.
              </a>
            </p>
            <iframe width="640" height="360" src="https://www.youtube.com/embed/i8mCnmAkQRE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            </div>
            <br />
            <div className="flex" id="rokkitt">
              <section>
            <p>
              <strong>KTV/Kroger</strong> | SLC, UT | Corporate TV Producer/Director | 10/2013-11/2016</p>
            <li>
              Handled all areas of TV production, scheduling, directing, camera,
              editing, etc.,
            </li>
            <li>
              Traveled to various locations (private jet, econ, car) to shoot
              content
            </li>
            <li>
              Directed/Produced live shows from KTV’s control room using
              Tricaster technology
            </li>
            <li>
              Created New Graphics Package & Setup new technology and software
              for live show
            </li>
            <br/>
            <iframe src="https://player.vimeo.com/video/114386906" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
           </section>
           </div>
            <br />
            <div className="flex" id="rokkitt">
              <section>
            <p>
              <strong>Utah State Government Short Public Films</strong> | SLC,
              UT | TV Producer | 4/2012–4/2016
            </p>
            <li>
              Shot scientific based filmed interviews of keynote subjects &
              broll (Div of Air Quality)
            </li>
            <li>
              Handled production and post ensured piece told client’s story and
              message to public
            </li>
            <br/>
            <iframe src="https://player.vimeo.com/video/51310539" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </section>
            </div>
            <br />
            <div className="flex" id="rokkitt">
              <section id="neg2">
            <p><strong>American Idol/19 Entertainment</strong> | SLC, UT | Camera
              Operator | 07/2013-10/2013</p>
            <li>
              Operated camera & grip to gain large scale TV production
              experience
            </li>
            <p>
              Productions Crewed On:{" "}
              <a className="blue" href="https://www.youtube.com/watch?v=x8_iD3MW4ms" target="_blank">
                SLC Auditions
              </a>{" "}
              <a className="blue" href="https://www.youtube.com/watch?v=3WY8zSDGahM" target="_blank">
                & SLC Show
              </a>
            </p>
            </section>
            </div>
            <br />
            <div className="flex" id="rokkitt">
            <section>
            <p><strong>KUED Channel 7</strong> | SLC, UT | Technical/Craft/Long
              Format TV | 01/2013-04/2013</p>
            <li>
              Worked with pros on projects including Utah Bucketlist: PowderDay
            </li>
            <li>Traveled in the field and in studio control room/post/audio</li>
            <li>
              Gained experience working with high profile public figures such as
              Jesse Jackson
            </li>
            <li>
              Advised by Production Director, Ken Verdoia, my work supported
              producer position
            </li>
            <br/>
            <iframe width="640" height="360" src="https://www.youtube.com/embed/sgC8-lf7pnY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </section>
          </div>
            <br />
            <div className="flex" id="rokkitt">
            <section>
            <p><strong>Les Rencontres Indie Short</strong> | Montréal, QC |
              5/2012–8/2012 | Dir./Screenwriter/Editor
            </p>
            <li>
              Drafted original screenplay, revised under Rob Schmidt, Hollywood
              Director
            </li>
            <li>
              Planned shot lists, scenes, storyboards, hired actors, locations
              and schedules
            </li>
            <li>
              Worked as film director-engaging talent, collaboration with crew
            </li>
            <li>
              Obtained original music composer and approved final film score
            </li>
            <li>Final film screened at the National Film Board of Canada</li>
            <br/>
            <iframe src="https://player.vimeo.com/video/50436501" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </section>
          </div>
          <br />
          <div className="flex">
          <div id="grey">
          <div className="flex">
          <section id="rokkitt">
            <h1 className="red"><strong>EDUCATION</strong></h1>
            <li>Helio Full-Stack Web Development • Web Dev Intensive | 2019</li>
            <li>London Film School, UK • Directors Intensive | 2017</li>
            <li>
              University Of Utah • BA Film & Media | 2013 • Art Technology
              Certification | 2012{" "}
            </li>
            <li>University Of Utah • BA Economics | 2007</li>
            <li>
              Champlain College Montréal Campus • Urban Indie Film Intensives |
              2012
            </li>
            </section>
            </div>
            <br id="grey"/>
            <div id="grey">
              <section className="neg2" id="rokkitt">
            <h1 className="red"><strong>SKILLS</strong></h1>
            <p>
                <strong>Web Development</strong>
            </p>
            <li>
            Research • WordPress • Wireframe/Layout • HTML, JS, CSS • Writing Code • React/Express/GitHub
            • Visual Studio Code</li>
            <p>
              <strong>Preproduction</strong>
            </p>
            <li>
              Screenwriting • Story Boards • Location Scout • Research •
              Casting/Rehearsals
            </li>
            <p>
              <strong>Production</strong>
            </p>
            <li>
              Cinematography • Lighting/Gaffer/Grip • Studio/Greenscreen • Live
              Broadcast • Camera Operator • Directing/Producing
            </li>
            <p><strong>Post</strong></p>
            <li>
              Editing • Visual Effects • Multimedia and Visuals • File
              Codecs/Compression • Color Grading • Motion Graphics • 2D
              Animation
            </li>
            </section>
            </div>
            <br />
            <div className="flex">
              <section className="neg3" id="rokkitt">
            <h1 className="red"><strong>TECHNOLOGIES</strong></h1>
            <li>
              Final Cut 7/X • Premiere CC • After Effects/Flash/CC
              Dreamweaver/PS/CC Illustrator/Adobe CC </li>
              <li>RED, Panasonic 100, Canon
              5D/7D/60D, Sony FS7 XDCam & JVC ProHD • Tricaster • Lights:
              Ikan, Kino Flo
            </li>
          </section>
          </div>
          </div>
          </div>
          <br/>
          <br/>
          <div className="flex">
            <section>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a href="https://vimeo.com/blaketholenclark" target="_blank"><i class="fab fa-vimeo" id="bigger"></i></a>
            <a href="https://www.facebook.com/blake.t.clark" target="_blank"><i class="fab fa-facebook-square" id="bigger"></i></a>
            <a href="https://www.youtube.com/channel/UCXbdLsa_eeLstY2TZEyWXdw" target="_blank"><i class="fab fa-youtube" id="bigger"></i></a>
            <a href="https://www.linkedin.com/in/blaketholenclark/" target="_blank"><i class="fab fa-linkedin-in" id="bigger"></i></a>
            <a href="https://twitter.com/@flowingfreeride" target="_blank"><i class="fab fa-twitter-square" id="bigger"></i></a>
          </section>
          </div>

          </div> 
          </div>
        </>
      </div>
      
      
    );
  }
}
export default Home;
