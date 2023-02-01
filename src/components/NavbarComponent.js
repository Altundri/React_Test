import React from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";

function NavbarComponent(args) {
  return (
    <div>
      <Container>
        <Navbar {...args}>
          <NavbarBrand href="/">LOGO</NavbarBrand>
        </Navbar>
      </Container>
      <hr></hr>
    </div>
  );
}

export default NavbarComponent;
