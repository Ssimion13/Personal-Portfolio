import React from "react";
import ProjectBody from "./ProjectBody"
import './projects.css'


class Projects extends React.Component {
  constructor(){
    super()

    this.returnToTop = this.returnToTop.bind(this)
  }

  returnToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <div className="projects">
        {/* <Title title="My Projects" image="https://s3.envato.com/files/239314206/590.jpg" opacity="0.5" /> */}
        <div className="projectHeader">
          <div className="projectHeaderDiv">
            <div className="width-80">
              <h2> These are some of the projects, both personal and professional that I have worked on in my career so far. </h2>
              <h2> For all sites, I have attached a link to view the site in its live state. When possible, I have also included the github repository for that project. </h2>
            </div>
          </div>
        </div>
        <ProjectBody />
      </div>
    )
  }

}

export default Projects;
