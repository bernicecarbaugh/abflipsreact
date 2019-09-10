import React, { Component } from "react";
import { Jumbotron, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Accordion extends React.Component {
  render() {
    const { title, content, expand, onClick } = this.props;

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
          <p>{content}</p>
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
      {
        title: "Functional Design",
        content:
          "We have a target buyer in mind for every house we do and we design everything around creating a place that works for them. Function leads our thinking…we believe that design only works when it makes sense in how our prospective buyer wants to live."
      },
      {
        title: "Quality Workmanship",
        content:
          "We treat every project as if it were our own home and make sure it is done right. We don’t cut corners on the things you can’t see and we keep longevity in mind when picking out materials. We want our homes to last and to be places we can be proud of, now and years from now."
      },
      {
        title: "Designed for Now and Forever",
        content:
          "We strive to be on top of what the market wants but we also always have one foot firmly grounded in the classics. Our style is modern yet traditional, hip yet classic. And we try to find that perfect balance in every home we tackle."
      }
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

          <div className="row h3">
            <p>Our work centers on three core principles:</p>
            <Button
              color="primary"
              className="ml-2"
              onClick={this.toggleExpand(true)}
            >
              <span className="fa fa-plus fa-lg"> Expand All</span>
            </Button>
            <Button
              color="secondary"
              className="ml-2"
              onClick={this.toggleExpand()}
            >
              <span className="fa fa-minus fa-lg"> Collapse All</span>
            </Button>
          </div>

          <div className="row">
            <div className="accordion">
              {accordionList.map((item, index) => (
                <Accordion
                  title={item.title}
                  content={item.content}
                  onClick={this.toggle(index + 1)}
                  expand={this.state[`block${index + 1}`]}
                />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
