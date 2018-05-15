import React from "react";
import {Link} from "react-router-dom"
import Title from "./Title"
import hbutton from "./hbutton.png";
import rbutton from "./rbutton.png";
import abutton from "./abutton.jpg";

function mainBody() {
  return (
      <div className = "body">
        <Title title="Scott Simion" image="http://igazabolszerelem.hu/images/images/959762414548d2b39f33ef.jpg" color="white"/>

        <div className="thumbnailDiv">

         <div className="thumbnailHolder">

           <div className="thumbnail">
             <Link to='/About'>
             <img className="thumbnailImage" alt = 'thumbnail' src={abutton} />
             <div className="anchorText">  About Me </div>
             </Link>
           </div>

           <div className="thumbnail">
             <Link to='/Projects' >
             <img className="thumbnailImage" alt='thumbnail' src={hbutton} />
            
             <div className="anchorText"> My Projects </div>
             </Link>
           </div>

           <div className="thumbnail">

               <Link to='/Resume' >
                 <img className="thumbnailImage" alt = 'thumbnail' src={rbutton} />
                 <div className="anchorText">  My Resume </div>
               </Link>
           </div>

         </div>
        </div>
        </div>
  )
}

export default mainBody;
