import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Alert, Row, Col } from "react-bootstrap";
import Menu from "./components/Menu";
import Leftside from "./components/Leftside";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="App">
      <Menu />
      <Row className="landing">
        <Col>
          <Leftside />
        </Col>
        <Col>
          <RightSide />
        </Col>
      </Row>
    </div>
  );
}

export default App;
