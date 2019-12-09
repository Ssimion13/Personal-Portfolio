import React, {Component} from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import tbOrder from '../projectImages/tommybahama/tborder.PNG'
import tbOrder2 from '../projectImages/tommybahama/tborder2.PNG'
import tbOrder3 from '../projectImages/tommybahama/tborder3.PNG'
import tbOrder4 from '../projectImages/tommybahama/tborder4.PNG'
import tbRestaurant from '../projectImages/tommybahama/tbrestaurant.PNG'



class TommyBahama extends Component {

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
    const titleText = "A project run with React/Redux on the Mobify Platform. Jquery was used to parse some pages/data, and RESTful APIs were used for building the mobile restaurant pages. Worked on mobile version of restaurant and order tracking."

    return (
      <Card className="projectCard" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Tommy Bahama"
          titleStyle= {headerTextStyle}
          subtitle="Project with 64labs: Mobile Site Production for Tommy Bahama"
          avatar={tbRestaurant}
          actAsExpander={true}
          showExpandableButton={true}
          raised={true}
          className="projectCard"
        />

        <CardTitle title={titleText}  titleStyle={pictureTextStyle} expandable={true} />
        <CardText expandable={true} style={Color}>
          <div className="appLinkDiv">
            <a target="_blank" rel="noopener noreferrer" className="appLink" href="https://tommybahama.com"> View </a>
          </div>
          <div className="projectScreenshots">
            <a target="_blank" rel="noopener noreferrer" href="https://www.tommybahama.com/en/store-finder?q=&searchStores=true&searchRestaurants=true">
              <img className="newMobileProjectImages" alt="Tommy Bahama Home" src={tbRestaurant} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.tommybahama.com/en/orderTrackingLanding">
              <img className="newMobileProjectImages" alt="Tommy Bahama Order" src={tbOrder} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.tommybahama.com/en/orderTrackingLanding">
              <img className="newMobileProjectImages" alt="Tommy Bahama Order 2" src={tbOrder2} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.tommybahama.com/en/orderTrackingLanding">
              <img className="newMobileProjectImages" alt="Tommy Bahama Order 3" src={tbOrder3} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.tommybahama.com/en/orderTrackingLanding">
              <img className="newMobileProjectImages" alt="Tommy Bahama Order 4" src={tbOrder4} />
            </a>
          </div>
        </CardText>
      </Card>
    );
  }
}

export default TommyBahama