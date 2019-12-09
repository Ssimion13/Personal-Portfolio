import React from "react";
import hbutton from "./Images/hbutton.png";
import rbutton from "./Images/rbutton.png";
import abutton from "./Images/abutton.jpg";
import About from './About/About.js'
import Projects from './Projects/Projects.js'
import Resume from './Resume/Resume.js'

class mainBody extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      item1: false,
      item2: false,
      item3: false,
      currentSection: null,
      start: 0,
      isOn: false,
    }
  }



  componentDidUpdate() {
    const {item1, item2, item3} = this.state
    const {time} = this.props
    if(time > 500 && !item1) {
      this.setState({
        item1: true,
      })
    }
    if(time > 1800 && !item2) {
      this.setState({
        item2: true,
      })
    }
    if(time > 4000 && !item3) {
      this.setState({
        item3: true,
      })
      clearInterval(this.timer)
    }
  }

  setSection(section) {
    const {currentSection} = this.state
    const mobileHeight = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 700 : 750;

    if(currentSection === section) {
      this.setState({
        currentSection: null
      })
      return
    } else {
      this.setState({
        currentSection: section
      }, () => window.scrollTo({
        top: mobileHeight,
        behavior: 'smooth',
      }))
    }
  }

  render() {
    const {currentSection} = this.state
    const {time} = this.props
    return (
        <div className = "body">
          {/* <Title title="Scott Simion" image="http://igazabolszerelem.hu/images/images/959762414548d2b39f33ef.jpg" color="white"/> */}
          <div className="mainBodyDiv">
            {/* <video className="width-full frontVideo" src={PortfolioOpening} autoPlay muted loop>
              Your browser does not support the video tag.
            </video> */}
            <div className="width-full frontText">
              <h1 className={` ${time > 1000 ? 'fade-in' : 'fade-out'} text-align-center margin-top-medium text-title`} > Hi. I'm Scott. </h1>
              <h1 className={` ${time > 2500 ? 'fade-in' : 'fade-out'} text-align-center margin-top-medium text-title`} > I'm a Web Developer. </h1>
              <h1 className={` ${time > 4000 ? 'fade-in' : 'fade-out'} text-align-center margin-top-medium text-title`} > Let's build some websites. </h1>
            </div>
          </div>
          <div className="thumbnailDiv">
            <div className="thumbnailHolder">
                <div onClick={() => this.setSection('aboutSection')} className={`thumbnail ${time > 1000 ? 'fade-in' : 'fade-out'}`}>
                  <div>
                  <img className="thumbnailImage" alt='thumbnail' src={abutton} />
                  <div className="anchorText">  About Me </div>
                  </div>
                </div>
                <div onClick={() => this.setSection('projectSection')} className={`thumbnail ${time > 2500 ? 'fade-in' : 'fade-out'}`}>
                  <div>
                  <img className="thumbnailImage" alt='thumbnail' src={hbutton} />
                  
                  <div className="anchorText"> Projects </div>
                  </div>
                </div>
                <div onClick={() => this.setSection('resumeSection')} className={`thumbnail ${time > 4000 ? 'fade-in' : 'fade-out'}`}>
                    <div>
                      <img className="thumbnailImage" alt='thumbnail' src={rbutton} />
                      <div className="anchorText"> Resume </div>
                    </div>
                </div>
            </div>
          </div>
          {currentSection === 'aboutSection' &&
            <About />
          }
          {currentSection === 'projectSection' &&
            <Projects />
          }
          {currentSection === 'resumeSection' &&
            <Resume />
          }
        </div>
    )
  }
}

export default mainBody;
