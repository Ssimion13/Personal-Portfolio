import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FrontPageDots from "../projectImages/dotsandlines/frontpagedots.png";
import MainGameDots from "../projectImages/dotsandlines/maingamedots.png";
import GameEndDot from "../projectImages/dotsandlines/gameenddot.png";



class DotsAndLines extends Component {

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
    const titleText = "Final group project while at V School. I worked exclusively on the front end on the game itself, using local storage and state to recreate the classic dots and lines game most commonly seen on kids menus at sit down restaurants."

    return (
      <Card className="projectCard" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Dots And Lines"
          titleStyle= {headerTextStyle}
          subtitle="React Full Stack Group Project, Worked on Front End"
          avatar={MainGameDots}
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
            label="Toggle to see Project"
          />
        </CardText> */}

        <CardTitle title={titleText}  titleStyle={pictureTextStyle} expandable={true} />
        <CardText expandable={true} style={Color}>
          <div className="appLinkDiv">
            <a target="_blank" className="appLink" href="https://dots-and-lines.herokuapp.com/"> View </a>
          </div>
          <div className = "projectScreenshots">
            <a href="https://dots-and-lines.herokuapp.com/" className="flex align-center justify-center">
              <img className="projectImages" alt = "makeyourday" src={FrontPageDots} />
            </a>
            <a href="https://dots-and-lines.herokuapp.com/" className="flex align-center justify-center">
              <img className="projectImages" alt = "dadjokepage" src={MainGameDots} />
            </a>
            <a href="https://dots-and-lines.herokuapp.com/" className="flex align-center justify-center">
              <img className="projectImages" alt = "favoritejokes" src={GameEndDot} />
            </a>
          </div>
        </CardText>
      </Card>
    );
  }
}

export default DotsAndLines
