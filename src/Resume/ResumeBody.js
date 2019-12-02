import React from "react";
import Resume from "./Resume.docx"
import currentResume from "./resume-1.jpg";

function ResumeBody (){
  return (
    <div>
    <div className="resumeBody">
      <div className="resumeImage">
        <img  alt='backgroundresumepage' src={currentResume} />
      </div>
      <a href={Resume} download="Resume.docx" className="downloadButtonDiv">
        {/* <div className="resumeDownloadButton">
          <Link  className="buttonText"  to="../ResumePage"> View My Resume! </Link>
        </div> */}
      <div className ="resumeDownloadButton">
        <div className="buttonText" href={Resume} download="Resume.docx"> Download </div>
      </div>
      </a>
    </div>
    </div>
  )
}

export default ResumeBody;
