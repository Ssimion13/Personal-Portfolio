import React from "react";
import Title from "../Title";
import ResumeBody from "./ResumeBody"
import ResumePicture from "./ResumeClipart.png"

class Resume extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div className="body">
      {/* <Title image={ResumePicture} position="top center" height="400px" /> */}
      <ResumeBody />
      </div>
    )
  }
}

export default Resume;
