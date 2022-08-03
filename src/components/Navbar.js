import React from "react";
import "../allStyles/NavBarStyle.css";
import { Button, Row, Col, Typography } from "antd";

const NavBar = () => {
  return (
    <>
      <Row container="true" className="row">
        <Col className="col1" xs={24} sm={15}>
          <Typography className="atools">ATools</Typography>
          <Typography className="dot">.</Typography>
        </Col>
        <Col xs={0} sm={4}>
          <Button size="large" className="bttn1" type="primary">
            Start free trial
          </Button>
        </Col>
        <Col xs={0} sm={4} className="movebttn">
          <Button size="large" className="bttn2" type="primary">
            Login
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default NavBar;
