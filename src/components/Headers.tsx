import * as React from "react";
import { Navbar, Container } from "react-bootstrap";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Note App</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
