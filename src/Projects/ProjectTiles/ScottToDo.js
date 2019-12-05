import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import frontpage from "./projectImages/frontpage.png"
import responsive from "./projectImages/Responsive.png";
import todolist from "./projectImages/todolist.png";


class ScottToDo extends Component {

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
    const titleText = "A proof of concept for me to test using JSON Web Tokens with BCrypt for login and signup authentication, this app allows users to sign in and create their own private to-do lists, with three types of to-dos available for the user to use independently from each other. Uses Media queries for responsiveness for mobile devices."

    return (
      <Card className="projectCard" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Scott To-Do"
          titleStyle= {headerTextStyle}
          subtitle="MERN Responsive Personal Project with JWT Authentication and React-BootStrap"
          avatar={frontpage}
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
          <div className="appLinkDiv flex align-center justify-between">
            <a target="_blank" className="appLink" href="http://lvendoscopy.s3-website-us-east-1.amazonaws.com/"> View </a>
            <a target="_blank" className="appLink" href="https://github.com/Ssimion13/ScottToDo"> View Github </a>
          </div>
          <div className = "projectScreenshots">
            <img className="projectImages" alt = "frontpage" src={frontpage} />
            <img className="projectImages" alt = "responsive" src={responsive} />
            <img className="projectImages" alt = "todolist" src={todolist} />

          </div>
        </CardText>
      </Card>
    );
  }
}

export default ScottToDo