import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

function RenderMapArea({ property }) {
  return (
    <area
      href="#"
      // onClick={this.handleMapArea}
      shape="circle"
      coords={`${property.mapCoord},12`}
    />
  );
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleMapArea = this.handleMapArea.bind(this);
  }

  handleMapArea() {
    console.log("hello handle map area invooked");
  }

  //   const renderModal = property => {
  //   console.log(property);
  //   return null;
  // };

  render() {
    const mapareas = this.props.properties.map(property => {
      return <RenderMapArea property={property} />;
    });

    return (
      <React.Fragment>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <p>
                  Move over, Property Brothers! This sister team is improving
                  greater Seattle housing stock in the Seattle metro area one
                  home at a time. We inherited our father's passion for real
                  estate. Take a look at the projects we've done, and contact us
                  if you have any questions, comments or ideas for our next one!
                </p>
              </div>
              <div className="col-12 col-sm-6 align-self-center text-center">
                <img
                  src="/images/ABFlipsLogo.png"
                  className="img-fluid text-center"
                />
              </div>
            </div>
          </div>
        </Jumbotron>

        <div className="container">
          <img
            className="map"
            src="/images/seattle-map.png"
            width="881px"
            height="868px"
            useMap="#image-map"
            alt="Seattle map"
          />
          <map name="image-map">{mapareas}</map>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
