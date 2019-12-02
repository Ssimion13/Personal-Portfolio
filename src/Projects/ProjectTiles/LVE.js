import React, {Component} from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import LVE1 from '../projectImages/lve/LVE1.PNG'
import LVE2 from '../projectImages/lve/LVE2.PNG'
import LVE3 from '../projectImages/lve/LVE3.PNG'



class LVE extends Component {

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
      fontSize: "30px",
      textAlign: 'center'
    }
    const pictureTextStyle = {
      fontSize: "25px",
      textAlign: "center"
    }
    const Color = { backgroundColor: "whitesmoke"}
    const titleText = "A freelance project with my former employer, a react-bootstrap styled React.js website created to the Doctor's standards."

    return (
      <Card className="projectCard" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Las Vegas Endoscopy"
          titleStyle= {headerTextStyle}
          subtitle="Freelance Website for Surgical Center"
          avatar={LVE1}
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
          <div className="appLinkDiv flex align-center justify-between">
            <a target="_blank" rel="noopener noreferrer" className="appLink" href="http://lvendoscopy.s3-website-us-east-1.amazonaws.com/"> View </a>
            <a target="_blank" rel="noopener noreferrer" className="appLink" href="https://github.com/Ssimion13/lvewebsite"> View Github </a>
          </div>
          <div className = "projectScreenshots">
            <a href="http://lvendoscopy.s3-website-us-east-1.amazonaws.com/">
              <img className="newMobileProjectImages" alt="LVE Website" src={LVE1} />
            </a>
            <a href="http://lvendoscopy.s3-website-us-east-1.amazonaws.com/">
              <img className="newMobileProjectImages" alt="LVE Website" src={LVE2} />
            </a>
            <a href="http://lvendoscopy.s3-website-us-east-1.amazonaws.com/">
              <img className="newMobileProjectImages" alt="LVE Website" src={LVE3} />
            </a>
          </div>
        </CardText>
      </Card>
    );
  }
}

export default LVE