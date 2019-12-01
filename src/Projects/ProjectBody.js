import React from "react";
import JapaneseOnTheGo from "./JapaneseOnTheGo";
import PUBGAssistant from "./PUBGAssistant";
import DotsAndLines from "./DotsAndLines";
import Pandora from "./Pandora";
import AnnSummers from "./AnnSummers";
import TommyBahama from './TommyBahama';

function ProjectBody (){
  return (
    <div className="projectDiv">
        <div className="projects">
          <Pandora />
          <AnnSummers />
          <TommyBahama />
          <JapaneseOnTheGo />
          <PUBGAssistant />
          <DotsAndLines />
        </div>
      </div>
  )
}

export default ProjectBody;
