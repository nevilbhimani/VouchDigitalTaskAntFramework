import React from "react";

import { useState, useEffect } from "react";
import { Form, Input } from "antd";
import { Checkbox, Col, Row, Button, message, Typography } from "antd";
import "../allStyles/loginFormStyle.css";

import { useFormik } from "formik";
import axios from "axios";

import * as Yup from "yup";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .email("Enter a valid email address"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      var axios = require("axios");
      var data = JSON.stringify({
        email: formik.values.email,
        password: formik.values.password,
      });

      var config = {
        method: "post",
        url: "https://reqres.in/api/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          message.success("Log in successfull ", [1.5]);
        })
        .catch(function (error) {
          console.log(error);
          message.error("User doesn't exist ", [1.5]);
        });
    },
  });
  console.log(formik.errors);

  return (
    <>
      <Row className="formDiv">
        <Col xs={24}>
          <Typography.Title level="1" className="header">
            Welcome Back
          </Typography.Title>

          <Typography className="lighttext">
            Sub-title text goes here
          </Typography>
        </Col>
        <Form className="formDiv2">
          <Col xs={24}>
            <Form.Item
              help={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
            >
              <Input
                id="email"
                size="large"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                variant="outlined"
                className="field"
                placeholder="Email Address"
              />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              help={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              }
            >
              <Input
                variant="outlined"
                className="smallfield"
                placeholder="Password"
                size="large"
                id="password"
                name="password"
                type="password"
                className="field"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Button
              className="loginbttn"
              variant="contained"
              type="submit"
              size="large"
              type="primary"
              onClick={formik.handleSubmit}
            >
              Login
            </Button>
          </Col>
        </Form>
        <Col xs={14} md={12} className="rpass">
          <Checkbox>Remember Password</Checkbox>
        </Col>
        <Col xs={10} md={12} className="fpass">
          Forgot Password?
        </Col>
      </Row>
    </>
  );
};

export default LoginForm;
