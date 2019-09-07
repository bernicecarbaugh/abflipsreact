import React, { Component } from "react";
import { Jumbotron, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { PROPIMAGES } from "../shared/propImages";
import Carousel from "react-bootstrap/Carousel";

class PropertyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propImages: PROPIMAGES
    };
  }

  render() {
    let property = this.props.property;
    const baseUrl = "http://localhost:3000/";
    // need to filter on propId passed
    const renderImages = this.state.propImages.map(propImage => {
      return (
        <Carousel.Item>
          <img
            key={propImage.displayOrder}
            className="d-block img-property-carousel"
            src={baseUrl + propImage.imgUrl}
            alt={propImage.caption}
          />
          <Carousel.Caption>{propImage.caption}</Carousel.Caption>
        </Carousel.Item>
      );
    });

    return (
      <React.Fragment>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12">
                <p>{property.description}</p>
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
              <BreadcrumbItem>
                <Link to="/properties">Properties</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{property.title}</BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="row text-align-center">
            <Carousel>{renderImages}</Carousel>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PropertyDetail;
