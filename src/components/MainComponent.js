import React, { Component } from "react";
import { PROPERTIES } from "../shared/properties";
import Header from "./HeaderComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./HomeComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: PROPERTIES
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route
            path="/home"
            render={() => <Home properties={this.state.properties} />}
          />
          {/* <Route exact path="/menu" render={<Home />} />
          <Route path="/menu/:dishId" render={<Home />} />
          <Route exact path="/contactus" render={<Home />} />
          <Route path="/aboutus" render={<Home />} /> */}
          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
