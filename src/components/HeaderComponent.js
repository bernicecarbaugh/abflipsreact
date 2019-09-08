import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      //React Fragment instead of <div> so one less node in DOM
      <React.Fragment>
        <Navbar className="navbar-dark fixed-top" expand="sm">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src="/images/ABFlipsLogo.png" height="30" alt="ABFlips" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-Link" to="/home">
                    <span className="fa fa-home fa-lg"> Home </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-Link" to="/aboutus">
                    <span className="fa fa-info fa-lg"> About Us </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-Link" to="/properties">
                    <span className="fa fa-list fa-lg"> Properties </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-Link" to="/contactus">
                    <span className="fa fa-address-card fa-lg">
                      {" "}
                      Contact Us{" "}
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
