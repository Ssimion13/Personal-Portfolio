import React from "react";
import JapaneseOnTheGo from "./ProjectTiles/JapaneseOnTheGo";
import PUBGAssistant from "./ProjectTiles/PUBGAssistant";
import DotsAndLines from "./ProjectTiles/DotsAndLines";
import Pandora from "./ProjectTiles/Pandora";
import AnnSummers from "./ProjectTiles/AnnSummers";
import BlackJack from "./ProjectTiles/BlackJack";
import LVE from "./ProjectTiles/LVE"
import TommyBahama from './ProjectTiles/TommyBahama';

function ProjectBody (){
  return (
    <div className="projectDiv">
        <div className="projects flex align-center justify-center direction-column">
          <Pandora />
          <AnnSummers />
          <TommyBahama />
          <LVE />
          <JapaneseOnTheGo />
          <PUBGAssistant />
          <DotsAndLines />
          <BlackJack />
        </div>
      </div>
  )
}

export default ProjectBody;
