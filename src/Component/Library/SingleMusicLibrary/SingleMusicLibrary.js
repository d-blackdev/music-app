import React from "react";
import "./SingleMusicLibrary.css";
import { FaRegHeart, FaEllipsisV } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import img from '../../../assests/images/img.jpg'

function SingleMusicLibrary(props) {
  return (
    <div className="singlemusiclibrary">
      <div className="single-content">
        <div className="single-img-cont">
          <img className="single-img" src={props.img} alt="img" />
        </div>
        <div className="single-body">
                  <h5 className="single-body-title">{props.title}</h5>
          <h6 className="single-body-text">
  {props.subtitle} &nbsp; <span className="single-body-time">{props.time ?` /  ${props.time}` : null}</span>
          </h6>
        </div>
      </div>
      <div className="single-icon-cont">
       {props.icon2 ?  <span className={props.coloured2 ? `single-icon coloured`: `single-icon`}>
          <BsHeartFill className="single-right" />
        </span> : null}
        <span className={props.coloured ? `single-icon coloured`: `single-icon`}>
          {props.icon}
        </span>
      </div>
    </div>
  );
}

export default SingleMusicLibrary;
