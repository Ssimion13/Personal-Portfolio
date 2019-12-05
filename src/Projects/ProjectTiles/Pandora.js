import React, {Component} from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import pandoraGiftCard from "../projectImages/pandora/pandoraGiftCard.PNG"
import pandoraGiftCard2 from "../projectImages/pandora/pandoraGiftCard2.PNG"
import pandoraMiniHeart from "../projectImages/pandora/pandoraMiniHeart.PNG"
import pandoraSizeGuide from "../projectImages/pandora/pandoraSizeGuide.PNG"



class Pandora extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {

    const headerTextStyle = {
      fontSize: "28px"
    }
    const pictureTextStyle = {
      fontSize: "25px",
      textAlign: "center"
    }
    const Color = { backgroundColor: "whitesmoke"}
    const titleText = "A project run with React/Redux on the Mobify Platform, with data being parsed through JQuery; I worked extensively throughout the mobile site on several locations, most notably on the My Account page, PDP pages, and interactivity between pages."

    return (
      <Card className="projectCard" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Pandora Jewelry"
          titleStyle= {headerTextStyle}
          subtitle="Project with 64Labs: Mobile website For US, UK, and DE Pandora"
          avatar={pandoraMiniHeart}
          actAsExpander={true}
          showExpandableButton={true}
          raised={true}
          className="projectCard"
        />
        {/* <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="Toggle"
          />
        </CardText> */}

        <CardTitle title={titleText}  titleStyle={pictureTextStyle} expandable={true} />
        <CardText expandable={true} style={Color}>
          <div className="appLinkDiv">
            <a target="_blank"  rel="noopener noreferrer" className="appLink" href="https://us.pandora.net"> View </a>
          </div>
          <div className = "projectScreenshots">
            <a href="https://us.pandora.net/en/jewelry/charms/?src=categorySearch&position=top">
              <img className="newMobileProjectImages" alt="Pandora Mini Heart" src={pandoraMiniHeart} />
            </a>
            <a>
              <img className="newMobileProjectImages" alt="Pandora Size Guide" src={pandoraSizeGuide} />
            </a>
            <a href="https://us.pandora.net/en/gifts/featured-gifting/gift-cards/pandora-e-gift-card/EGC.html#searchmethod=suggestedprd&searchterm=e%20gift%20card&firstview=false">
              <img className="newMobileProjectImages" alt="Pandora Gift Card" src={pandoraGiftCard} />
            </a>
            <a href="https://us.pandora.net/en/gifts/featured-gifting/gift-cards/pandora-e-gift-card/EGC.html#searchmethod=suggestedprd&searchterm=e%20gift%20card&firstview=false">
              <img className="newMobileProjectImages" alt="Pandora Gift Card 2" src={pandoraGiftCard2} />
            </a>
          </div>
        </CardText>
      </Card>
    );
  }
}

export default Pandora