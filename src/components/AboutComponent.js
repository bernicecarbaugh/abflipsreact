import React, { Component } from "react";
import { Jumbotron, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

class Accordion extends React.Component {
  render() {
    const { title, expand, onClick } = this.props;

    return (
      <div>
        <dt
          className={expand ? "title is-expanded" : "title"}
          onClick={onClick}
        >
          {title}
        </dt>
        <dd
          className={expand ? "content is-expanded" : "content"}
          onClick={onClick}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            interdum diam. Donec interdum porttitor risus non bibendum. Maecenas
            sollicitudin eros in quam imperdiet placerat. Cras justo purus,
            rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec
            elit faucibus condimentum. Donec facilisis consectetur enim sit amet
            varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget
            mauris. Aliquam dapibus, ante quis fringilla feugiat, mauris risus
            condimentum massa, at elementum libero quam ac ligula. Pellentesque
            at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
            dolor venenatis mauris placerat tristique eget id dolor. Quisque
            blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
            elementum tincidunt.
          </p>
        </dd>
      </div>
    );
  }
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block1: true,
      block2: false,
      block3: false
    };
  }

  toggle = index => () => {
    this.setState({ [`block${index}`]: !this.state[`block${index}`] });
  };

  toggleExpand = (expand = false) => () => {
    this.setState({
      block1: expand,
      block2: expand,
      block3: expand
    });
  };

  render() {
    const accordionList = [
      { title: "First Accordion" },
      { title: "Second Accordion" },
      { title: "Third Accordion" }
    ];

    return (
      <React.Fragment>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <p>
                  We are two sisters who grew up spending family Sundays “open
                  housing” as we call it. We’ve always loved real estate…from
                  searching from the right house, to remodeling it to make it
                  just so and to selling it to the next buyer who will make it
                  their perfect home. We each remodeled our own homes several
                  times over the years but in 2014 we purchased our first fixer
                  upper together. The transformation of that first house was so
                  outstanding, we’ve been hooked ever since!
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
              <BreadcrumbItem active>About</BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="row">
            <div className="accordion">
              {accordionList.map((item, index) => (
                <Accordion
                  title={item.title}
                  onClick={this.toggle(index + 1)}
                  expand={this.state[`block${index + 1}`]}
                />
              ))}
            </div>

            <button
              type="button"
              className="btn"
              onClick={this.toggleExpand(true)}
            >
              Expand All
            </button>
            <button type="button" className="btn" onClick={this.toggleExpand()}>
              Collapse All
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
