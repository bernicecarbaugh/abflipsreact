import React, { Component } from "react";
import { Jumbotron, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import ItemsCarousel from "react-items-carousel";

class PropertyDetail extends Component {
  componentWillMount() {
    this.setState({
      activeItemIndex: 0
    });
  }

  changeActiveItem = activeItemIndex => {
    this.setState({ activeItemIndex });
  };

  render() {
    let property = this.props.property;
    let { activeItemIndex } = this.state;
    let propImages = this.props.currentPropImages.map(propImage => {
      return (
        <div
          className="div-property-detail"
          key={propImage.displayOrder}
          style={{
            backgroundImage: "url(" + propImage.imgUrl + ")"
          }}
        >
          <h6>{propImage.caption}</h6>
        </div>
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

          <div
            style={{
              padding: "0 10px",
              margin: "0 auto"
            }}
          >
            <ItemsCarousel
              // Carousel configurations
              numberOfCards={2}
              gutter={12}
              slidesToScroll={2}
              showSlither={true}
              firstAndLastGutter={true}
              freeScrolling={false}
              // Active item configurations
              requestToChangeActive={this.changeActiveItem}
              activeItemIndex={activeItemIndex}
              activePosition={"center"}
              chevronWidth={60}
              rightChevron={">"}
              leftChevron={"<"}
              outsideChevron={true}
            >
              {propImages}
            </ItemsCarousel>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PropertyDetail;
