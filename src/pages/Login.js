import React from "react";
import { Button, Row, Col, Typography } from "antd";
import LoginForm from "../components/loginForm";
import NavBar from "../components/Navbar";
import login2 from "../assets/login2.png";
import "../allStyles/LoginPageStyle.css";
export const Login = () => {
  return (
    <div>
      <NavBar />
      <Row container className="container">
        <Col item sm={10} xs={24} className="logindiv">
          <LoginForm />
        </Col>
        <Col item sm={14} xs={0}>
          <img src={login2} className="image" />
        </Col>
      </Row>
    </div>
  );
};
