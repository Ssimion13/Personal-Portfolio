import React from "react";
import {Link} from "react-router-dom"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHamburgerOpen: false
    }
    this.scrollSite = this.scrollSite.bind(this)
    this.toggleHamburger = this.toggleHamburger.bind(this)
  }

  scrollSite(location) {
    window.scrollTo({
        top: location,
        behavior: 'smooth',
    })
    this.setState({
      isHamburgerOpen: false
    })
  }

  toggleHamburger() {
    this.setState((prevState) => {
      return {
        isHamburgerOpen: !prevState.isHamburgerOpen
      }
    })
  }

  render() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    return (
      <div className={`navbarDiv ${window.scrollY > 0 ? 'navbarTop' : 'navbarBottom'}`}>
        <Link className={`navbarLinks ${this.props.time > 1000 ? 'fade-in' : 'fade-out'}`} to='/'> 
          Scott Simion 
        </Link>
        {/* <div className={`navbarLinks ${this.props.time > 2500 ? 'fade-in' : 'fade-out'}`}>
          Web Developer
        </div> */}
        {this.state.isHamburgerOpen &&
        <div className="hamburgerMenu">
          <div onClick={() => this.scrollSite(750)} className={`navbarLinks hamburgerLinks ${this.props.time > 1000 ? 'fade-in' : 'fade-out'}`}> About </div>
          <div onClick={() => this.scrollSite(1500)} className={`navbarLinks hamburgerLinks ${this.props.time > 1000 ? 'fade-in' : 'fade-out'}`}> Projects </div>
          <div onClick={() => this.scrollSite(2600)} className={`navbarLinks hamburgerLinks ${this.props.time > 1000 ? 'fade-in' : 'fade-out'}`}> Resume </div>
        </div>
        }
        <div className={`hamburgerButton ${this.props.time > 1000 ? 'fade-in' : 'fade-out'}`} onClick={() => this.toggleHamburger()}> 三　</div>
      </div>
    )
  }
}

export default Navbar;
