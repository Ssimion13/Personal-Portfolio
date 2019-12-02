import React from "react";
import ProjectBody from "./ProjectBody"
import './projects.css'
import { Modal } from '@material-ui/core';

class Projects extends React.Component {
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
