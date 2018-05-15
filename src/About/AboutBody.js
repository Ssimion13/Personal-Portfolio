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
    <div className ="aboutProfile">
      <h1> My Background </h1>
      <p> I originally found my passion for computer science while I was in undergraduate school for Biology-- in my junior year and senior year I made friends with many CS major students who kept telling me how I'd love working in CS: I found their work to be fascinating and the elective classes invigorating, but my school wouldn't let me switch majors so far along in my program. "When I worked as a medical assistant, I found that while I enjoyed helping people get better, I wanted to make a difference in the world in a different way.  I found that the medical record programs and other programs I used on my job were fascinating in scope and scale.  Once I started coding and realized my work could make a difference in the world, I decided that working as a developer was truly my life's calling. </p>
    </div>
    <div className ="aboutBackground">
      <h1>My Values </h1>
      <p> In the workplace, I'm a very strong proponent of teamwork, communication, self-sufficiency, and hard work. <br/> <br/>
      Growing up, my parents instilled in me a strong desire to learn more about the world.  I became a problem-solver because they taught me to understand <em>why</em> things work rather than <em>just</em> if they work.  I always put 100% into everything I do, especially when other people are affected by my work and counting on me.  I honestly believe that anything is possible if everyone works hard and pulls together toward a common goal.  That means that everyone must know what they need to do and how to do it.  One of my passions is competitive gaming, where I lead my team by ensuring that everyone knows their role and are working together as a team.
      </p>
    </div>
    <div className ="aboutWebDevelopment">
      <h1> Choosing Development </h1>
      <p> I chose web/software development as my career because I genuinely enjoy the logic and problem solving that comes with the field. The feeling of accomplishment when I finish a project or even just solve a problem that has held me up is, to me, a euphoric feeling that no other career can match.".
          People say that you should do what you love, and I have to say: I love to code.</p>
    </div>


    </div>
  )
}

export default AboutBody;
