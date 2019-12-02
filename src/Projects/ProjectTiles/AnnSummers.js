import React, {Component} from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import annsummersCheckout from "../projectImages/annsummers/annsummersCheckout.PNG"
import annsummersCheckout2 from "../projectImages/annsummers/annsummersCheckout2.PNG"
import annsummersCAndC from "../projectImages/annsummers/annsummersCAndC.PNG"
import annsummersCAndC2 from "../projectImages/annsummers/annsummersCAndC2.PNG"
import annsummersHome from "../projectImages/annsummers/annsummersHome.PNG"
import annsummersHome2 from "../projectImages/annsummers/annsummersHome2.PNG"



class AnnSummers extends Component {

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
      fontSize: "30px"
    }
    const pictureTextStyle = {
      fontSize: "25px",
      textAlign: "center"
    }
    const Color = { backgroundColor: "whitesmoke"}
    const titleText = "A project run with React/Redux on the Mobify Platform, with data being parsed through JQuery; I've worked throughout the site, but the largest live work was on the homepage and checkout."

    return (
      <Card className="projectCard" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Ann Summers"
          titleStyle= {headerTextStyle}
          subtitle="Mobile Site Production for British Adult Store"
          avatar={annsummersHome}
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
            <a target="_blank" className="appLink" href="https://www.annsummers.com"> View </a>
          </div>
          <div className="projectScreenshots">
            <a href="www.annsummers.com">
              <img className="newMobileProjectImages" alt="Ann Summers Home" src={annsummersHome} />
            </a>
            <a target="_blank" href="https://www.annsummers.com">
              <img className="newMobileProjectImages" alt="Ann Summers Home 2" src={annsummersHome2} />
            </a>
            <a>
              <img className="newMobileProjectImages" alt="Ann Summers Click and Collect" src={annsummersCAndC} />
            </a>
            <a>
              <img className="newMobileProjectImages" alt="Ann Summers Click and Collect 2" src={annsummersCAndC2} />
            </a>
            <a>
              <img className="newMobileProjectImages" alt="Ann Summers Checkout" src={annsummersCheckout} />
            </a>
            <a>
              <img className="newMobileProjectImages" alt="Ann Summers Checkout 2" src={annsummersCheckout2} />
            </a>
          </div>
        </CardText>
      </Card>
    );
  }
}

export default AnnSummers