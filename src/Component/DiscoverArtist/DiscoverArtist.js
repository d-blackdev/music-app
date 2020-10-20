import React from "react";
import SwipeableViews from "react-swipeable-views";
// import Swiper from "react-id-swiper";
// import "swiper/css/swiper.css";
import img from "../../assests/images/img.jpg";
import img1 from "../../assests/images/img1.jpg";
import img2 from "../../assests/images/img2.jpg";

// function DiscoverArtist(props) {
//     return (
//         <Swiper>
//             <div>Slide 1</div>
//             <div>Slide 2</div>
//             <div>Slide 3</div>
//             <div>Slide 4</div>
//             <div>Slide 5</div>
//         </Swiper>
//     );
// }

// export default DiscoverArtist;

function DiscoverArtist(props) {
  
  const styles = {
    slide: {
      padding: 15,
      minHeight: `${props.height}px`,
      width: "100%",
      borderRadius: 20,
      position: "relative",
    },
    slide1: {
      background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${props.img}) center/cover no-repeat`,
    },
    slide2: {
      background: ` url(${img1}) center/cover`,
    },
    slide3: {
      background: ` url(${img2}) center/cover`,
    },
    content: {
      background: "transparent ",
    },
    container: {
      position: "absolute",
      top: "85%",
      left: 10,
      transition: "all .3s ease-in",
      display: "flex",
      justifyContent: "space-between",
      width: "95%",
      hover: true,
    },
    name: {
      background: "#f68426",
      border: "1px solid #f68426",
      borderRadius: "20px",
      padding: "5px",
      color: "#eee",
      fontSize: "13px",
      hover: {
        hoverColor: "red",
      },
    },
  };
  return (
    // <SwipeableViews enableMouseEvents>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        <div style={Object.assign({}, styles.content, styles.container)}>
          <h6 style={Object.assign({}, styles.content, styles.name)}>
            {props.name}
            {/* kenny */}
          </h6>
          <h6 style={Object.assign({}, styles.content, styles.name)}>
            {props.genre}
          </h6>
        </div>
      </div>
      
    // </SwipeableViews>
  );
}

export default DiscoverArtist;
