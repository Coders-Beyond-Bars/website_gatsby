import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const LeftAboutMenu = () => {
  return (
    <div className="left-menu">
      <h6 className="menu-title">Who We Are</h6>
      <Nav vertical>
        <NavItem>
          <NavLink href="/about/challenges/">Challenges</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about/mission/">Mission</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about/team/">Team</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about/partners/">Partners</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default LeftAboutMenu;
