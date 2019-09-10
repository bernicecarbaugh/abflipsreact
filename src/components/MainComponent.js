import React, { Component } from "react";
import { PROPERTIES } from "../shared/properties";
import { PROPIMAGES } from "../shared/propImages";
import Header from "./HeaderComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./HomeComponent";
import Properties from "./PropertiesComponent";
import PropertyDetail from "./PropertyDetailComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: PROPERTIES,
      propImages: PROPIMAGES
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
          currentPropImages={this.state.propImages.filter(
            propImage => propImage.propId === parseInt(match.params.propId)
          )}
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
          <Route path="/aboutus" render={() => <About />} />
          <Route path="/contactus" render={() => <Contact />} />
          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
