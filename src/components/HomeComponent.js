import React, { Component } from "react";
import { Jumbotron, Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPropId: 0,
      isModalOpen: false
    };
    this.handleMapClick = this.handleMapClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleMapClick = props => e => {
    this.setState({
      selectedPropId: props.property.propId,
      isModalOpen: true
    });
  };

  closeModal() {
    this.setState({
      selectedPropId: 0,
      isModalOpen: false
    });
  }

  render() {
    const mapareas = this.props.properties.map(property => {
      return (
        <area
          id={property.propId}
          onClick={this.handleMapClick({ property })}
          href="#"
          shape="circle"
          coords={property.mapCoord}
        />
      );
    });

    const ModalContent = ({ property }) => {
      if (property !== undefined) {
        return (
          <React.Fragment>
            <ModalHeader>
              <div className="modal-title h4">{property.title}</div>
              <div className="modal-title h6">{property.neighborhood}</div>
            </ModalHeader>
            <ModalBody>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 img-modal-carousel"
                        src={property.imgB4Url}
                        alt="Before"
                      />
                      <Carousel.Caption>
                        <p>Before</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 img-modal-carousel"
                        src={property.imgPostUrl}
                        alt="After"
                      />
                      <Carousel.Caption>
                        <p>After</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>

                <div className="col-12 col-sm-6 align-self-center">
                  {property.description}
                  <hr />
                  <Link to={"/properties/" + property.propId}>
                    <Button
                      color="primary"
                      className="btn mt-2 mr-2"
                      onClick={this.closeModal}
                    >
                      More
                    </Button>
                  </Link>
                  <Button
                    color="secondary"
                    className="btn mt-2"
                    onClick={this.closeModal}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </ModalBody>
          </React.Fragment>
        );
      } else {
        return <ModalBody>nothing</ModalBody>;
      }
    };

    return (
      <React.Fragment>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <p>
                  Here at ABFlips, we are passionate about taking rundown houses
                  and turning them into homes that people want to live in. We
                  believe in functional design, quality workmanship and a design
                  aesthetic that marries current market trends with classicism
                  that never goes out of style. We treat each project as if it
                  was our own home and hope that pride of ownership comes
                  through in every single home we do.
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
          <Modal className="modal-lg" isOpen={this.state.isModalOpen}>
            <ModalContent
              property={
                this.props.properties.filter(
                  property => property.propId === this.state.selectedPropId
                )[0]
              }
            />
          </Modal>

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
