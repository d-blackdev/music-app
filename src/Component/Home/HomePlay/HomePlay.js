import React from 'react'
import './HomePlay.css'
import img from '../../../assests/images/img.jpg'
import {FaStepForward, FaPause} from 'react-icons/fa'

function HomePlay() {
    return (
        <div className="homeplay">
            <div className="homeplay-content">
                <div className="homeplay-body">
                <div className="homplay-img-cont">
                    <img className="homeplay-img" src={img} alt="img" />
                </div>  
                <h6 className="homeplay-text">Adventure - <span>CEE -Y</span></h6>
                </div>
                <div className="homeplay-icon">
                    <FaPause className="homeplay-icons first-icon"/>
                    <FaStepForward className="homeplay-icons"/>
                </div>
            </div>
        </div>
    )
}

export default HomePlay
