import React from "react";
import "./LibraryNav.css";
import { FaCog, FaUserCircle } from "react-icons/fa";
import {withRouter,NavLink} from 'react-router-dom'
// import { NavLink } from "reactstrap";

function LibraryNav(props) {
  console.log(props)
    console.log(props.history.location.pathname)
  return (
      <div className="library-nav">
          {props.history.location.pathname === '/library' ? <NavLink to="/settings" className="library-nav-link">{props.icon}</NavLink> : props.icon}
      {/* {props.icon} */}

      <h6 className="library-nav-text">{props.title}</h6>
      <div className="icon2-cont">
        {props.icon2}
        {props.icon3 ? <NavLink className="library-nav-link" to={`${props.link}`}>{props.icon3}</NavLink> : props.icon3}
      </div>
    </div>
  );
}

export default withRouter(LibraryNav);
