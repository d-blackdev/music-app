import React from "react";
import SwipeableViews from "react-swipeable-views";
import "./AlbumViews.css";
import img from '../../../assests/images/img.jpg'
import img1 from '../../../assests/images/img1.jpg'
import img2 from '../../../assests/images/img2.jpg'

import {FaDownload} from 'react-icons/fa'
// import Swiper from "react-id-swiper";
// import "swiper/css/swiper.css";

function AlbumViews(props) {
  const styles = {
    slide: {
      padding: 15,
      minHeight: `${150}px`,
      width: "100%",
      borderRadius: 20,
      position: "relative",
    },
    slide1: {
      background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${props.img}) center/cover no-repeat`,
    },
    slide2: {
      background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${img1}) center/cover`,
    },
    slide3: {
      background: ` url(${img}) center/cover`,
    },
    content: {
      background: "transparent ",
    },
    container: {
      position: "absolute",
      top: "75%",
      left: 10,
      transition: "all .3s ease-in",
      display: "flex",
      justifyContent: "space-between",
      width: "95%",
      hover: true,
    },
    icon: {
      color: "#f68426",
      marginTop: 3,
      fontSize: "14px",
      marginRight: 5,
    },
    likes: {
      fontSize: "12px",
      color: "#f68426",
      marginTop: 7,
      fontWeight: 600,
    },
    name: {
      background: "#f68426",
      border: "1px solid #f68426",
      borderRadius: "20px",
      padding: "5px",
      color: "#eee",
      fontSize: "10px",
      hover: {
        hoverColor: "red",
      },
    },
    icons: {
      marginTop: 5,
    },
    title: {
        marginTop: "6%",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
      color: "#a1a1a1",
      fontSize: "30px",
        fontWeight: 600,
        textAlign: "center",
      textTransform: 'capitalize',
    },
  };
  return (
    // <SwipeableViews>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        <h6 style={Object.assign({}, styles.content,styles.title)}>
          {props.title}
        </h6>
        <div style={Object.assign({}, styles.content, styles.container)}>
          <h6 style={Object.assign({}, styles.content, styles.name)}>
            {/* {props.name} */}
            {props.artist}
          </h6>
          <h6 style={Object.assign({}, styles.content, styles.icons)}>
            <FaDownload
              style={Object.assign({}, styles.icon, styles.content)}
            />{" "}
            <span style={Object.assign({}, styles.likes, styles.content)}>
              {props.num}
            </span>{" "}
          </h6>
        </div>
      </div>

    // </SwipeableViews>
  );
}

export default AlbumViews;
