import React from "react";
import Title from "../Title";
import ResumeBody from "./ResumeBody"
import ResumePicture from "./ResumeClipart.png"

function Resume () {
  return (
    <div className="body">
     <Title image={ResumePicture} position = "top center" height = "400px" />
     <ResumeBody />
    </div>
  )
}

export default Resume;
