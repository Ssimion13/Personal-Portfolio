import React from "react";
import ScottSuit from "./ScottSuit.jpg"

class AboutBody extends React.Component {
  constructor(){
    super()

    this.returnToTop = this.returnToTop.bind(this);
  }

  returnToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <div className="aboutBodies">
        <div className="personalInformation">
          <div className="infoDivider">
            <img alt="me" className="portrait" src={ScottSuit} />
            <div className="contactInfo">
              <h4> Email: ScottSimion@gmail.com </h4>
              <h5> Telephone: (561) 632-9726 </h5>
            </div>
          </div>
      </div>
      <div>
        <div className="aboutProfile">
          <h1 className="bold"> Why Web Development? </h1>
            <p>
              It might be a bit cliche to say, but the idea that through these frameworks and languages we use to create software and apps we can 
              create things that people around the world use every day is, honestly, truly awe inspiring to me. 
              There's something distinctly satisfying about creating something, then looking back at it and saying "I built that!"; with development, you get that kind of satisfaction every day.
              Sure, it can be hard and having to learn new things everyday can be a daunting task at times, but the prize of knowing the work you do is seen and used every day?
              That's really hard to beat. I love it.
            </p>
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

        {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
          <div className="flex align-center justify-center">
            <div onClick={this.returnToTop}> To Top </div>
          </div>
        }
      </div>
    )
  }
}

export default AboutBody;
