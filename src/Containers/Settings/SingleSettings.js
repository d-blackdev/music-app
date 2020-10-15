import React, { Component } from "react";

import "./SingleSettings.css";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

export default class SingleSettings extends Component {
  state = {
    checked: false,
  };
  changeChecked = () => {
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
  };
  render() {
    return (
      <div className="single-settings">
            <h6 className={this.props.active ? "single-setting-text main": 'single-setting-text'}>{this.props.title}</h6>
            <span className="settings-icon-cont" onClick={this.changeChecked}>
                {this.props.icon ? !this.state.checked ? <FaToggleOff className="single-setting-icon" /> : <FaToggleOn className="single-setting-icon active" /> : null}
                {this.props.text ? <h6 className="text">{this.props.text}{this.props.texticon ? <span className="text-icon">{this.props.texticon}</span>: null}</h6> : null}
         
        </span>
      </div>
    );
  }
}
