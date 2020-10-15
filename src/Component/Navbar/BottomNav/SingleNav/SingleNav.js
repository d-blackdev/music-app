import React from 'react'
import './SingleNav.css'
import {MdSettingsInputAntenna,MdViewList,MdHome} from 'react-icons/md'
import {  FaSearch } from 'react-icons/fa'
import {NavLink } from 'react-router-dom';

function SingleNav(props) {
    let nav = null;
    switch (props.type) {
        case ('home'):
            nav = <NavLink exact to="/chat" className="link">
                <div className="nav">
                <MdHome className="single-nav-icon"/>
                <h6 className="nav-text">Home</h6>
            </div>
            </NavLink>
            return nav
        case ('search'):
            nav = <NavLink exact to="/search" className="link">
                 <div className="nav">
                <FaSearch className="single-nav-icon"/>
                <h6 className="nav-text">Search</h6>
            </div>
            </NavLink>
            return nav
        case ('discovery'):
            nav = <NavLink exact to="/discovery" className="link">
                <div className="nav">
                <MdSettingsInputAntenna className="single-nav-icon"/>
                <h6 className="nav-text">Discovery</h6>
            </div>
            </NavLink>
            return nav
        case ('library'):
            nav = <NavLink exact to="/library" className="link">
                <div className="nav">
                <MdViewList className="single-nav-icon active"/>
                <h6 className="nav-text">Library</h6>
            </div>
            </NavLink>
            return nav
        default:
            return null;
}

 
}

export default SingleNav
