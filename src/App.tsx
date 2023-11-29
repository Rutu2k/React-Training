import React from "react";
import { Col, Row } from "reactstrap";
import Test from "./test/Test";
import UsersContainer from "./users/UsersContainer";

function App() {
  return (
    <Row>
      <Col>
        <UsersContainer />
      </Col>
      <Col>
        <Test />
      </Col>
    </Row>
  );
}

export default App;
