import React, { Component } from "react";
import {
  Jumbotron,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardImg,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

// one way to define a functional component
function RenderProperty({ property }) {
  return (
    <Card>
      <Link to={`/properties/${property.propId}`}>
        <CardHeader>{property.title}</CardHeader>
        <CardBody>
          <CardText>
            Purchased: {property.purchaseDate}
            <br />
            Sold: {property.saleDate}
          </CardText>
          <CardImg
            width="100%"
            src={property.imgPostUrl}
            alt={property.title}
          />
        </CardBody>
      </Link>
    </Card>
  );
}

class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPropId: 0
    };
  }

  handleMapClick = props => e => {
    this.setState({
      selectedPropId: props.property.propId
    });
  };

  render() {
    const propertyCards = this.props.properties.map(property => {
      return (
        <div key={property.propId} className="col-sm col-md-4">
          <RenderProperty property={property} />
        </div>
      );
    });

    return (
      <React.Fragment>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <p>
                  We have each remodeled our own homes several times over the
                  years but in 2014 we purchased our first fixer upper together.
                  The transformation of that first house was so outstanding,
                  we’ve been hooked ever since! Since then, we have completed 10
                  projects together, and working on our 11th one now.
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
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Properties</BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="row">{propertyCards}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Properties;
