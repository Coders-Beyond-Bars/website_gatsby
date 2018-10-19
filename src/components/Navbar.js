import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import logo from '../img/logo.svg';



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: '',
      collapsed: false,
      whoWeAre: false,
      whatWeDo: false,
      getInvolved: false
    }
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({collapsed: !this.state.collapsed});
  }

  render() {
    return (
      <Navbar light expand="lg">
        <Container>
        <NavbarBrand href="/">
          <img src={logo} alt="Coders Beyond Bars" className="logo-img" />
          <span className="logo-text">Coders Beyond Bar</span>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={this.state.collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                Who We Are
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/about/challenges/">The Challenges</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/about/mission/">Our Mission</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/about/team/">Team</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/about/partners/">Partners</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                What We Do
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/activities/pathway/">The Pathway</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/activities/programs/">Programs</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/activities/hostsites/">Host Sites</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/get_involved/">Get Involved</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
      </Navbar>
    );
  }
};

export default NavBar;
