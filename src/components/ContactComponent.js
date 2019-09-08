import React, { Component } from "react";
import { Jumbotron, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <p>
                  We love talking about real estate so feel free to reach out
                  with any questions, comments or better yet leads on any new
                  houses we should be looking at!
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
              <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="row">Please get in touch with use!</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
