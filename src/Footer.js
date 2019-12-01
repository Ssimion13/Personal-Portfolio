import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLinks flex align-center justify-center width-full"> 
          <a href="https://www.facebook.com/AeroReborn" className="footerPlaceholderIcons"> Facebook </a>
          <div className="borders"> || </div>
          <a href='https://github.com/Ssimion13' className="footerPlaceholderIcons">  Github </a>
          <div className="borders"> || </div>
          <a href='https://www.linkedin.com/in/scott-simion-b96443161/' className="footerPlaceholderIcons"> LinkedIn </a>
        </div>
     </div>
    </div>
  )
}

export default Footer;
