import React from "react";
import ScottSuit from "./ScottSuit.jpg"

function AboutBody (){
  return (
    <div className="aboutBodies">
      <div className="personalInformation">
        <div className="infoDivider">
          <img alt="me" className="portrait" src={ScottSuit} />
          <div className="contactInfo">
            <h3> Contact Me! </h3>
            <h4> Email: ScottSimion@gmail.com </h4>
            <h5> Telephone: (561) 632-9726 </h5>
          </div>
        </div>
    </div>
    <div>
      <div className="aboutProfile">
        <h1 className="bold"> Why Development? </h1>
        <p> I originally found my passion for computer science while I was in undergraduate pre-med at the University of Missouri:
          all of my friends later in college were CS major students who convinced me to try coding with my electives, so I did! 
          I found their work to be fascinating and the elective classes invigorating, but my school wouldn't let me switch majors so far along in my program. 
          After I graduated, I picked up coding again and I knew that this is what I wanted to do with my career. </p>
      </div>
      <div className="aboutBackground">
        <h1 className="bold"> Values At Work? </h1>
        <p> In the workplace, I believe that communication and hard work are the key to success. <br/> <br/>
          In my time working as a developer, I've found that the biggest boon and the biggest killer for any project is communication.
          I've always valued working hard and smart in everything I do, but when you're working with co-workers who are all working together on the same project,
          it's always more important (and efficient!) to make sure that everyone is on the same page, so everything can get done as fast as possible with as little do-over as possible.
          Lets get the work done!
        </p>
      </div>
      <div className="aboutWebDevelopment">
        <h1 className="bold"> What Got You Into Development? </h1>
        <p> I chose web/software development as my career because I genuinely enjoy the logic and problem solving that comes with the field. 
          There's always a new problem to be solved, a new technology to learn, a new framework... and there's always a time limit. To be honest, I kind of enjoy the race; I worked in medicine
          and while it wasn't for me, I found the tight deadlines that can come in development as well to almost be exhilarating-- how can we solve the problem, finish the sprint as efficiently as possible?
          It might not be the most fun question at that moment, but I find it to be really enjoyable, especially when the project is done and I can look back at what I've made.
        </p>
      </div>
    </div>


    </div>
  )
}

export default AboutBody;
