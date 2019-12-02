import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import JapaneseOnTheGo1 from '../projectImages/japaneseonthego/JapaneseOnTheGo1.PNG'
import JapaneseOnTheGo2 from '../projectImages/japaneseonthego/JapaneseOnTheGo2.PNG'


class JapaneseOnTheGo extends Component {

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
    const titleText = "This project was created to help a friend (and others) who are learning Japanese to practice their basic written language skills."

    return (
      <Card className="projectCard" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Japanese On The Go"
          titleStyle= {headerTextStyle}
          subtitle="React Front End Project"
          avatar={JapaneseOnTheGo1}
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
          <div className = "appLinkDiv">
            <a target="_blank" className="appLink" href="http://thriftstoreblackjack.surge.sh/"> View </a>
          </div>
          <div className = "projectScreenshots">
            <a href="https://japaneseonthego.com/HiraganaTest">
              <img className="newMobileProjectImages" alt = "blackjackpicture" src={JapaneseOnTheGo1} />
            </a>
            <a href="https://japaneseonthego.com/HiraganaTest">
              <img className="newMobileProjectImages" alt = "blackjackwin" src={JapaneseOnTheGo2} />
            </a>
          </div>
        </CardText>
      </Card>
    );
  }
}

export default JapaneseOnTheGo
