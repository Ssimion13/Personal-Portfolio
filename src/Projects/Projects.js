import React from "react";
import Title from "../Title";
import ProjectBody from "./ProjectBody"

class Projects extends React.Component {
  constructor(){
    super()
    
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="Projects">
        <Title title="Projects" image="https://s3.envato.com/files/239314206/590.jpg" opacity="0.5" />
        <ProjectBody />
      </div>
    )
  }

}

export default Projects;
