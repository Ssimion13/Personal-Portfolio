import React from "react";
import {Link} from "react-router-dom"

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Link className={`navbarLinks ${props.time > 1000 ? 'fade-in' : 'fade-out'}`} to='/'> 
        Scott Simion 
      </Link>
      <div className={`navbarLinks ${props.time > 2500 ? 'fade-in' : 'fade-out'}`}>
        Web Developer
      </div>
      {/* <Link className="links" to='/About'> About </Link> */}
      {/* <Link className="links" to='/Projects'> Projects </Link> */}
      {/* <Link className="links" to='/Resume'> Resume </Link> */}
    </div>
  )
}

export default Navbar;
