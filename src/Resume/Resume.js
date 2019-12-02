import React from "react";
import ResumeBody from "./ResumeBody"

class Resume extends React.Component {
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
