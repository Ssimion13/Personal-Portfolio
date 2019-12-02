import React from "react";
import {Link} from "react-router-dom"
import Resume from "./Resume.docx"
import currentResume from "./resume-1.jpg";

function ResumeBody (){
  return (
    <div>
    <div className="resumeBody">
      <div className="resumeImage">
        <img  alt='backgroundresumepage' src={currentResume} />
      </div>
      <div className = "downloadButtonDiv">
        {/* <div className="resumeDownloadButton">
          <Link  className="buttonText"  to="../ResumePage"> View My Resume! </Link>
        </div> */}
      <div className ="resumeDownloadButton">
        <a className="buttonText" href={Resume} download="Resume.docx"> Download </a>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ResumeBody;
