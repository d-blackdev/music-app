import React, { Component } from "react";
import "./Login.css";
import Logo from "../../assests/images/Logo.png";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default class Login extends Component {
  state = {
    name: "",
    password: "",
    showIcon: false,
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
            <h6 className="login-text">Login</h6>
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
              <Button className="login-btn" block size="lg">
                LOGIN
              </Button>
            </Row>
          </Form>
          <h5 className="login-pass">Forgot Password ?</h5>
          <div className="login-opt">
            <div className="line1"></div>
            <h6>OR</h6>
            <div className="line2"></div>
          </div>
          <div className="login-social">
            <div>
              <FaGoogle className="google login-social-icon" />
            </div>
            <div>
              <FaTwitter className="twitter login-social-icon" />
            </div>
            <div>
              <FaFacebook className="facebook login-social-icon" />
            </div>
                </div>
                <h6 className="login-acc">Don't have an account ? <Link to="/signup" className="login-link">  Resgister</Link></h6>
        </div>
      </div>
    );
  }
}
