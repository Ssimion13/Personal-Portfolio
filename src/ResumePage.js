import React from "react";
import resume from "./Resume/Resume-1.jpg";
import resume2 from "./Resume/Resume-2.jpg";

function ResumePage(){
  return (
    <div className="resumeImage">
      <img  alt='backgroundresumepage' src={resume} />
      <img alt='backgroundresumepage' src={resume2} />
    </div>
  )
}

export default ResumePage
