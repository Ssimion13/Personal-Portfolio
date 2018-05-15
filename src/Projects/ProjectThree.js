import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import FrontPageDots from "./projectImages/frontpagedots.png";
import MainGameDots from "./projectImages/maingamedots.png";
import GameEndDot from "./projectImages/gameenddot.png";



class ProjectOne extends Component {

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
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Dots And Lines"
          titleStyle= {headerTextStyle}
          subtitle="React Full Stack Group Project, Worked on Front End"
          avatar={MainGameDots}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="Toggle to see Project"
          />
        </CardText>

        <CardTitle title={titleText}  titleStyle={pictureTextStyle} expandable={true} />
        <CardText expandable={true} style={Color}>
          <div className="appLinkDiv">
            <a className="appLink" href="https://make-your-day.herokuapp.com/"> View Website</a>
          </div>
          <div className = "projectScreenshots">
            <img className="projectImages" alt = "makeyourday" src={FrontPageDots} / >
            <img className="projectImages" alt = "dadjokepage" src={MainGameDots} / >
            <img className="projectImages" alt = "favoritejokes" src={GameEndDot} / >

          </div>
        </CardText>
        <CardActions>
          <FlatButton label="Expand" onClick={this.handleExpand} />
          <FlatButton label="Reduce" onClick={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}

export default ProjectOne
