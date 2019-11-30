import React from "react";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";
import ProjectFive from "./ProjectFive";
import ProjectSix from "./ProjectSix";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function ProjectBody (){
  return (
    <div className="projectDiv">
        <div className="projects">
          <MuiThemeProvider>
            <ProjectFour />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <ProjectOne />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <ProjectTwo />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <ProjectThree />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <ProjectFive />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <ProjectSix />
          </MuiThemeProvider>
        </div>
      </div>
  )
}

export default ProjectBody;
