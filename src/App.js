import React, { Component } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainBody from "./mainBody";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {Route, Switch} from "react-router-dom"
// import Projects from "./Projects/Projects";
// import About from "./About/About";
// import Resume from "./Resume/Resume";
// import ResumePage from "./ResumePage";


class App extends Component {
  constructor() {
    super() 
    this.state = {
      isOn: false,
      start: 0,
      time: 0,
    }
  }

  componentDidMount() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }

  render() {
    const {time} = this.state
    return (
      <MuiThemeProvider>
        <div className="mainBackground">
          <Navbar time={time} />
            {/* <Switch>
              <Route exact path = "/" component = {mainBody} />
              <Route path="/About" component = {About} />
              <Route path="/Projects" component = {Projects} />
              <Route path="/Resume" component = {Resume} />
              <Route path="/ResumePage" component = {ResumePage} />
            </Switch> */}
            <MainBody time={time} start={this.state.start} timer={this.timer}/>
          <Footer time={time} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
