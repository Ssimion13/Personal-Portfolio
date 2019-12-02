import React from "react";
import {Link} from "react-router-dom"
import Title from "./Title"
import hbutton from "./Images/hbutton.png";
import rbutton from "./Images/rbutton.png";
import abutton from "./Images/abutton.jpg";
import Button from 'react-bootstrap/Button';
import PortfolioOpening from './PortfolioOpening.mp4'
import About from './About/About.js'
import Projects from './Projects/Projects.js'
import Resume from './Resume/Resume.js'

class mainBody extends React.Component {
  constructor(){
    super()
    this.state = {
      item1: false,
      item2: false,
      item3: false,
      currentSection: null,
      start: 0,
      time: 0,
      isOn: false,
    }
  }

  componentDidMount() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }

  componentDidUpdate() {
    if(this.state.time > 500 && !this.state.item1) {
      this.setState({
        item1: true,
      })
    }
    if(this.state.time > 1800 && !this.state.item2) {
      this.setState({
        item2: true,
      })
    }
    if(this.state.time > 4000 && !this.state.item3) {
      this.setState({
        item3: true,
      })
      clearInterval(this.timer)
    }
  }

  setSection(section) {
    const {currentSection} = this.state

    if(currentSection === section) {
      this.setState({
        currentSection: null
      })
      return
    } else {
      this.setState({
        currentSection: section
      }, () => window.scrollTo({
        top: 850,
        behavior: 'smooth',
      }))
    }
  }

  render() {
    const {currentSection} = this.state
    return (
        <div className = "body">
          {/* <Title title="Scott Simion" image="http://igazabolszerelem.hu/images/images/959762414548d2b39f33ef.jpg" color="white"/> */}
          <div className="mainBodyDiv">
            {/* <video className="width-full frontVideo" src={PortfolioOpening} autoPlay muted loop>
              Your browser does not support the video tag.
            </video> */}
            <div className="width-full frontText">
              <h1 className={` ${this.state.time > 1000 ? 'fade-in' : 'fade-out'} text-align-center margin-top-medium`} > Hi. I'm Scott. </h1>
              <h1 className={` ${this.state.time > 2500 ? 'fade-in' : 'fade-out'} text-align-center margin-top-medium`} > I'm a Web Developer. </h1>
              <h1 className={` ${this.state.time > 4000 ? 'fade-in' : 'fade-out'} text-align-center margin-top-medium`} > Let's build some websites. </h1>
            </div>
          </div>
          <div className="thumbnailDiv">
            <div className="thumbnailHolder">
                <div onClick={() => this.setSection('aboutSection')} className={`thumbnail ${this.state.time > 1000 ? 'fade-in' : 'fade-out'}`}>
                  <div>
                  <img className="thumbnailImage" alt='thumbnail' src={abutton} />
                  <div className="anchorText">  About Me </div>
                  </div>
                </div>
                <div onClick={() => this.setSection('projectSection')} className={`thumbnail ${this.state.time > 2500 ? 'fade-in' : 'fade-out'}`}>
                  <div>
                  <img className="thumbnailImage" alt='thumbnail' src={hbutton} />
                  
                  <div className="anchorText"> Projects </div>
                  </div>
                </div>
                <div onClick={() => this.setSection('resumeSection')} className={`thumbnail ${this.state.time > 4000 ? 'fade-in' : 'fade-out'}`}>
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
