import React from 'react'
import './TopNav.css'
import { FaBatteryFull, FaWifi, FaSignal } from 'react-icons/fa'
import {BsBatteryFull} from 'react-icons/bs'

function TopNav() {
    return (
        <div className="navbar">
            <div className="nav-cont">
                <h6>10:45</h6>
                <div className="nav-icons-cont">
                    <FaSignal className="nav-icon"/>
                    <FaWifi className="nav-icon"/>
                    <BsBatteryFull className="nav-icon icon-3"/>
                </div>
            </div>
        </div>
    )
}

export default TopNav;
