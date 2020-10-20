import React from "react";
import "./SongView.css";
import img from "../../../assests/images/img.jpg";
import { BsHeartFill } from "react-icons/bs";
import { FaDownload, FaEllipsisV } from "react-icons/fa";

function SongView(props) {
  return (
    <>
      <div className="song-view-cont">
        <div className="song-body">
          <div className="song-img-cont">
            <img src={props.img} alt="img" className="song-img-cont" />
            <h6 className="song-img-text">{props.artist}</h6>
          </div>
          <div className="song-content">
            <h6 className="song-title">{props.title}</h6>
            <div className="song-icon-cont">
              <h6 className="song-icon">
                <BsHeartFill className="song-single-icon" />{" "}
                <span className="song-text">{props.num1}</span>
              </h6>
              &nbsp;/&nbsp;
              <h6 className="song-icon">
                <FaDownload className="song-single-icon" />{" "}
                <span className="song-text">{props.num2}</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="song-menu-icon-cont">
          <FaEllipsisV className="song-menu-icon" />
        </div>
      </div>
      <div className="song-divider"></div>
    </>
  );
}

export default SongView;
