import React, { Component } from "react";
import "./SignUp.css";
import Logo from "../../assests/images/Logo.png";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { Link } from "react-router-dom";

export default class SignUp extends Component {
  state = {
    name: "",
    password: "",
      showIcon: false,
    confirmPassword:''
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  showIcons = () => {
    this.setState((prevState) => ({
      showIcon: !prevState.showIcon,
    }));
  };

  render() {
    return (
      <div className="login">
        <div className="login-content">
          <div className="login-img-cont">
            <img src={Logo} alt="logo" className="login-logo" />
            <h6 className="login-text">SIGN UP</h6>
          </div>
          <Form className="form">
            <Row>
              <Col xs={12}>
                <FormGroup className="single-input">
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    className="input"
                    required
                    onChange={this.onChangeHandler}
                    value={this.state.name}
                  />
                  <Label htmlFor="name" className="label">
                    Phone, Email Or Username
                  </Label>
                </FormGroup>
              </Col>
              <Col xs={12}>
                <FormGroup className="single-input">
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    className="input"
                    value={this.state.password}
                    required
                    onChange={this.onChangeHandler}
                  />
                  <Label htmlFor="password" className="label">
                    Password
                  </Label>
                  <span onClick={this.showIcons} className="show-icon-cont">
                    {!this.state.showIcon ? (
                      <MdVisibility className="show-icon" />
                    ) : (
                      <MdVisibilityOff className="show-icon" />
                    )}
                  </span>
                </FormGroup>
              </Col>
              <Col xs={12}>
                <FormGroup className="single-input">
                  <Input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="input"
                    value={this.state.password}
                    required
                    onChange={this.onChangeHandler}
                  />
                  <Label htmlFor="confirmPassword" className="label">
                    Confirm Password
                  </Label>
                  <span onClick={this.showIcons} className="show-icon-cont">
                    {!this.state.showIcon ? (
                      <MdVisibility className="show-icon" />
                    ) : (
                      <MdVisibilityOff className="show-icon" />
                    )}
                  </span>
                </FormGroup>
              </Col>
              <Col xs={12}>
                <FormGroup className="single-inputs">
                  <Input
                    type="checkbox"
                    name="check"
                    id="check"
                    className="inputs"
                    
                  />
                  <Label htmlFor="check" className="labels">
                   Remember me
                  </Label>
                  
                </FormGroup>
              </Col>
              <Button className="login-btn" block size="lg">
                REGISTER
              </Button>
            </Row>
          </Form>

          <h6 className="login-acc">
            Already have an account ?{" "}
            <Link to="/" className="login-link">
              {" "}
              Login
            </Link>
          </h6>
        </div>
      </div>
    );
  }
}
