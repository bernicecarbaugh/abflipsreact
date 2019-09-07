import React, { Component } from "react";
import { PROPERTIES } from "../shared/properties";
import Header from "./HeaderComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./HomeComponent";
import Properties from "./PropertiesComponent";
import PropertyDetail from "./PropertyDetailComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: PROPERTIES
    };
  }

  render() {
    const PropertyWithId = ({ match }) => {
      return (
        <PropertyDetail
          property={
            this.state.properties.filter(
              property => property.propId === parseInt(match.params.propId)
            )[0]
          }
        />
      );
    };

    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route
            path="/home"
            render={() => <Home properties={this.state.properties} />}
          />
          <Route
            exact
            path="/properties"
            render={() => <Properties properties={this.state.properties} />}
          />
          <Route path="/properties/:propId" render={PropertyWithId} />
          />
          <Route path="/menu/:dishId" render={<Home />} />
          <Route path="/contactus" render={<Home />} />
          <Route path="/aboutus" render={<Home />} />
          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
