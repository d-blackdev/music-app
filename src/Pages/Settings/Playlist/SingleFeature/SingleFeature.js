import React from 'react'
import './SingleFeatures.css'
import img from '../../../../assests/images/img.jpg'
import {BsHeartFill} from 'react-icons/bs'

function SingleFeature(props) {
    return (
        <div className="sinlgefeature">
            <div className="singlefeature-img-cont">
                <img src={props.img} alt="img" className="singlefeature-img"/>
            </div>
            <div className="singlefeaturebody">
                <BsHeartFill className="feature-icon" />
                <h6 className="feature-text">123,344</h6>
            </div>
        </div>
    )
}

export default SingleFeature
