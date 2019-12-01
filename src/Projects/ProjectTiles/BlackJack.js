import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import LoseSS from "../projectImages/blackjack/LoseSS.png";
import WinSS from "../projectImages/blackjack/WinSS.png";
import BustedSS from "../projectImages/blackjack/BustedSS.png";
import WholeBlackjackSS from "../projectImages/blackjack/WholeBlackjackSS.png";



class BlackJack extends Component {

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
    const titleText = "This full stack project used the card API to make a rudimentary blackjack simulator that compares your cards to a computer's random result."

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Blackjack"
          titleStyle= {headerTextStyle}
          subtitle="React Full Stack Project w/ API use"
          avatar={WholeBlackjackSS}
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
            <a target="_blank" className="appLink" href="http://thriftstoreblackjack.surge.sh/"> View Website</a>
          </div>
          <div className = "projectScreenshots">
            <img className="projectImages" alt = "blackjackpicture" src={WholeBlackjackSS} / >
            <img className="projectImages" alt = "blackjackwin" src={WinSS} / >
            <img className="projectImages" alt = "blackjacklose" src={LoseSS} / >
            <img className="projectImages" alt = "blackjackbusted" src={BustedSS} / >

          </div>
        </CardText>
      </Card>
    );
  }
}

export default BlackJack
