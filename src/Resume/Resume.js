import React from "react";
import ResumeBody from "./ResumeBody"

class Resume extends React.Component {
  constructor() {
    super()

    this.returnToTop = this.returnToTop.bind(this)
  }
  componentDidMount() {
    window.scrollTo(0,0)
  }

  returnToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <div className="body">
      {/* <Title image={ResumePicture} position="top center" height="400px" /> */}
      <ResumeBody />
      <div className="flex align-center justify-center">
          <div onClick={this.returnToTop}> To Top </div>
      </div>
      </div>
    )
  }
}

export default Resume;
