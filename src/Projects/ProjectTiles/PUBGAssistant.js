import React, {Component} from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

import pubgAssistant1 from "../projectImages/PUBG/PUBGAssistant1.PNG"
import pubgAssistant2 from "../projectImages/PUBG/PUBGAssistant2.PNG"


class PUBGAssistant extends Component {

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
    const titleText = "This full stack project used the PlayerUnknown's BattleGrounds API to give users random start locations for the game, as well as allowing the user to compare stats with other users (Pre 2019)"

    return (
      <Card className="projectCard" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="PUBG Assistant"
          titleStyle= {headerTextStyle}
          subtitle="React Full Stack Personal Project w/ API use"
          avatar={pubgAssistant1}
          actAsExpander={true}
          showExpandableButton={true}
          raised={true}
          className="projectCardOuter"
        />
        {/* <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="Toggle"
          />qqqqq
        </CardText> */}

        <CardTitle title={titleText}  titleStyle={pictureTextStyle} expandable={true} />
        <CardText expandable={true} style={Color}>
        <div className="appLinkDiv flex align-center justify-between">
            <a target="_blank"  rel="noopener noreferrer" className="appLink" href="http://lvendoscopy.s3-website-us-east-1.amazonaws.com/"> View </a>
            <a target="_blank"  rel="noopener noreferrer" className="appLink" href="https://github.com/Ssimion13/pubg_drop_generator"> View Github </a>
          </div>
          <div className="projectScreenshots">
            <a href="https://pubgassistant.herokuapp.com/DropGenerator">
              <img className="newMobileProjectImages" alt="favoritedogs" src={pubgAssistant1} />
            </a>
            <a href="https://pubgassistant.herokuapp.com/DropGenerator">
              <img className="newMobileProjectImages" alt="videopage" src={pubgAssistant2} />
            </a>
          </div>
        </CardText>
      </Card>
    );
  }
}

export default PUBGAssistant
