import React from "react";
import Title from "../Title";
import ProjectBody from "./ProjectBody"
import './projects.css'


class Projects extends React.Component {
  constructor(){
    super()
  }

  // componentDidMount() {
  //   window.scrollTo(0,0);
  // }

  render() {
    //TODO: Style this more than just base text. 
    return (
      <div className="projects">
        {/* <Title title="My Projects" image="https://s3.envato.com/files/239314206/590.jpg" opacity="0.5" /> */}
        <div className="projectHeader">
          <div className="projectHeaderDiv">
            <h2> These are some of the projects, both personal and professional that I have worked on in my career so far. </h2>
            <h2> For all sites, I have attached a link to view the site in its live state. </h2>
            <h2>For my personal sites, I also will link the repository on github that hosts the code for the file; I am unable to show the code for my non-freelance professional work as it is the property of the company, unfortunately. </h2> 
          </div>
        </div>
        <ProjectBody />
      </div>
    )
  }

}

export default Projects;
