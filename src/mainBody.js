import React from "react";
import {Link} from "react-router-dom"
import Title from "./Title"
import hbutton from "./Images/hbutton.png";
import rbutton from "./Images/rbutton.png";
import abutton from "./Images/abutton.jpg";
import Button from 'react-bootstrap/Button';

function mainBody() {
  return (
      <div className = "body">
        <Title title="Scott Simion" image="http://igazabolszerelem.hu/images/images/959762414548d2b39f33ef.jpg" color="white"/>
        <div className="thumbnailDiv">
         <div className="thumbnailHolder">
           <Link to='/About' className="thumbnail">
             <div>
             <img className="thumbnailImage" alt = 'thumbnail' src={abutton} />
             <div className="anchorText">  About Me </div>
             </div>
           </Link>

           <Link to='/Projects' className="thumbnail">
             <div>
             <img className="thumbnailImage" alt='thumbnail' src={hbutton} />
            
             <div className="anchorText"> Projects </div>
             </div>
           </Link>

           <Link to='/Resume' className="thumbnail">
               <div>
                 <img className="thumbnailImage" alt = 'thumbnail' src={rbutton} />
                 <div className="anchorText">  Resume </div>
               </div>
           </Link>

         </div>
        </div>
        </div>
  )
}

export default mainBody;
