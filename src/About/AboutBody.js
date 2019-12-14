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
      <div>
        <div className="title flex align-center justify-center">
          <h2 className="titleText"> About Me </h2>
        </div>
        <div className="aboutBodies">
        <div className="personalInformation aboutSplitter">
            <img alt="me" className="portrait" src={ScottSuit} />
            <div className="infoSubset">
              <h4> Email: ScottSimion@gmail.com </h4>
              <h5> Telephone: (561) 632-9726 </h5>
            </div>
      </div>
        <div className="aboutSplitter">
          <div className="aboutProfile">
            <h1 className="bold"> Why Web Development? </h1>
              <p className="aboutText">
                There's something distinctly satisfying about creating something, then looking back at it and saying "I built that!"; with development, 
                you get that kind of satisfaction every day. It's awesome to have a job where I can learn a new concept, a new language, and not just get hands on with it, but actually see 
                it at work for anyone using the site you're working on? It's truly amazing.
              </p>
          </div>
          <div className="aboutWebDevelopment">
            <h1 className="bold"> About Me </h1>
            <p className="aboutText"> I am currently a Full-Stack Web Developer available to the Greater Tampa Bay area.
                Right now I'm keeping my skills sharp but I'm always willing to hear of new opportunities; lets connect!
            </p>
          </div>
        </div>

          {/* {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
            <div className="flex align-center justify-center">
              <div onClick={this.returnToTop}> To Top </div>
            </div>
          } */}
        </div>
      </div>
    )
  }
}

export default AboutBody;
