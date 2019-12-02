import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbarLinks" to='/'> 
        Scott Simion 
      </Link>
      {/* <Link className="links" to='/About'> About </Link> */}
      {/* <Link className="links" to='/Projects'> Projects </Link> */}
      {/* <Link className="links" to='/Resume'> Resume </Link> */}
    </div>
  )
}

export default Navbar;
