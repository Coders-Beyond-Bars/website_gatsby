import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const LeftWorkMenu = () => {
  return (
    <div className="left-menu">
      <h6>What We Do</h6>
      <Nav vertical>
        <NavItem>
          <NavLink href="/activities/pathway/">The Pathway</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/activities/programs/">Programs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/activities/hostsites/">Host Sites</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default LeftWorkMenu;
