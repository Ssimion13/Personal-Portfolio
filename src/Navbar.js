import React from "react";
import {Link} from "react-router-dom"

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.scrollSite = this.scrollSite.bind(this)
  }

  scrollSite(location) {
    window.scrollTo({
        top: location,
        behavior: 'smooth',
    })
  }
  render() {
    return (
      <div className={`navbarDiv ${window.scrollY > 0 ? 'navbarTop' : 'navbarBottom'}`}>
        <Link className={`navbarLinks ${this.props.time > 1000 ? 'fade-in' : 'fade-out'}`} to='/'> 
          Scott Simion 
        </Link>
        <div className={`navbarLinks ${this.props.time > 2500 ? 'fade-in' : 'fade-out'}`}>
          Web Developer
        </div>
        {/* <Link className="links" to='/About'> About </Link> */}
        {/* <Link className="links" to='/Projects'> Projects </Link> */}
        {/* <Link className="links" to='/Resume'> Resume </Link> */}
      </div>
    )
  }
}

export default Navbar;
