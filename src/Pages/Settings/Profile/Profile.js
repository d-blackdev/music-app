import React from "react";
import "./Profile.css";
import { MdSort, MdPlace } from "react-icons/md";
import { FaEllipsisV } from "react-icons/fa";
import LibraryNav from "../../../Component/Library/LibraryNav/LibraryNav";
import img from "../../../assests/images/img.jpg";

import img1 from "../../../assests/images/img1.jpg";
import img2 from "../../../assests/images/img2.jpg";
import img3 from "../../../assests/images/img3.jpg";
import img4 from "../../../assests/images/img4.jpg";
import { Button } from "reactstrap";
import SingleMusicLibrary from "../../../Component/Library/SingleMusicLibrary/SingleMusicLibrary";

const list2 = [
  {
    img,
    title: "Queen",
    subtitle: "Artist",
    icon: <FaEllipsisV />,

    coloured2: true,
    time: "4:14",
  },
  {
    img: img1,
    title: "70s Roct Anthem Radio",
    subtitle: "Playlist Radio",
    icon: <FaEllipsisV />,

    time: "3:10",
  },
  {
    img: img2,
    title: "Progressive Rock",
    subtitle: "Playlist",
    icon: <FaEllipsisV />,

    time: "4:00",
  },
  {
    img: img3,
    title: "Star Talk Radio",
    subtitle: "Podcast",
    icon: <FaEllipsisV />,

    time: "7:14",
  },
  {
    img: img4,
    title: "Queen",
    subtitle: "Artist",
    icon: <FaEllipsisV />,

    time: "2:14",
  },
  {
    img: img1,
    title: "70s Roct Anthem Radio",
    subtitle: "Playlist Radio",
    icon: <FaEllipsisV />,

    time: "3:10",
  },
  {
    img: img3,
    title: "Star Talk Radio",
    subtitle: "Podcast",
    icon: <FaEllipsisV />,

    time: "6:14",
  },
  {
    img: img4,
    title: "Queen",
    subtitle: "Artist",
    icon: <FaEllipsisV />,

    time: "10:14",
  },
];
function Profile() {
  const LibraryLists2 = list2.map((list, index) => (
    <SingleMusicLibrary key={index} {...list} icon2 />
  ));
  return (
    <div className="profile">
      <div className="profile-content1">
        <LibraryNav
          icon={<MdSort className="library-nav-icon icon-size " />}
          icon2={<MdPlace className="library-nav-icon icon-2" />}
          icon3={<FaEllipsisV className="library-nav-icon " />}
        />
      </div>
      <div className="profile-content">
        <div className="top-profile-content">
          <div className="top-profile-cont-1">
            <div className="top-profile-img-cont">
              <img src={img} alt="img" className="top-profile-img" />
            </div>
            <h6 className="top-title1">Jack Kirby</h6>
            <h6 className="top-title2">@jackkirby</h6>
          </div>
          <Button className="profile-btn">follow </Button>
          <h6 className="top-profile-text">Followed by ninja,CNN</h6>
          <div className="profile-location">
            <MdPlace className="location-icon" />
            <h6 className="profile-location-text">Lagos, Nigeria</h6>
          </div>
          {/* Followers */}
          <div className="follower">
            {/* single action */}
            <div className="single-follower">
              <h6 className="single-follower-text">54</h6>
              <h6 className="single-follower-action">upload</h6>
            </div>
            {/* single action */}
            <div className="single-follower">
              <h6 className="single-follower-text">128</h6>
              <h6 className="single-follower-action">following</h6>
            </div>
            {/* single action */}
            <div className="single-follower">
              <h6 className="single-follower-text">626K</h6>
              <h6 className="single-follower-action">followers</h6>
            </div>
                  </div>
                  {/* Link */}
                  <div className="profile-links">
                      <Button className="profile-link-btn actives">Songs</Button>
                      <Button className="profile-link-btn ">Overview</Button>
                      <Button className="profile-link-btn ">Videos</Button>
                      <Button className="profile-link-btn ">Shows</Button>
                  </div>
        </div>
        <div className="bottom-profile-content">{LibraryLists2}</div>
      </div>
    </div>
  );
}

export default Profile;
