import React, { Component } from "react";
import {
  Jumbotron,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      "Thanks for sending us your message!\n" +
        "\nUsername: " +
        this.username.value +
        "\nPhone Number: " +
        this.telnum.value +
        "\nEmail: " +
        this.email.value +
        "\nMessage: " +
        this.message.value
    );
  }

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

          <div className="row">
            <h3>Get in touch with us</h3>
          </div>

          <div className="row">
            <Form onSubmit={this.handleSubmit} className="col-10 offset-1">
              <FormGroup row>
                <Label sm={2} htmlFor="username">
                  Your Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    innerRef={input => (this.username = input)}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2} htmlFor="telnum">
                  Phone Number
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    id="telnum"
                    name="telnum"
                    innerRef={input => (this.telnum = input)}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2} htmlFor="email">
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    innerRef={input => (this.email = input)}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2} htmlFor="message">
                  Message
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    innerRef={input => (this.message = input)}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button type="submit" value="submit" color="primary">
                    Send Message
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
