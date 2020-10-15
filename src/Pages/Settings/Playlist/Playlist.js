import React from "react";
import "./Playlist.css";
import { MdSort, MdPlace } from "react-icons/md";
import { FaEllipsisV, FaAngleUp } from "react-icons/fa";
import LibraryNav from "../../../Component/Library/LibraryNav/LibraryNav";
import img from '../../../assests/images/img.jpg'
import img1 from '../../../assests/images/img1.jpg'
import img2 from '../../../assests/images/img2.jpg'
import img3 from '../../../assests/images/img3.jpg'
import img4 from '../../../assests/images/img4.jpg'
import SingleMusicLibrary from "../../../Component/Library/SingleMusicLibrary/SingleMusicLibrary";
import SingleFeature from "./SingleFeature/SingleFeature";

const list2 = [
    {
      img,
      title: "Queen",
      subtitle: "Artist",
      icon: <FaEllipsisV />,
        coloured: true,
      coloured2: true,
      time: "4:14",
    },
    {
      img: img1,
      title: "70s Roct Anthem Radio",
      subtitle: "Playlist Radio",
      icon: <FaEllipsisV />,
      coloured: true,
      time: "3:10",
    },
    {
      img: img2,
      title: "Progressive Rock",
      subtitle: "Playlist",
      icon: <FaEllipsisV />,
      coloured: true,
      time: "4:00",
    },
    {
      img: img3,
      title: "Star Talk Radio",
      subtitle: "Podcast",
      icon: <FaEllipsisV />,
      coloured: true,
      time: "7:14",
    },
    {
      img: img4,
      title: "Queen",
      subtitle: "Artist",
      icon: <FaEllipsisV />,
      coloured: true,
      time: "2:14",
    },
    {
      img: img1,
      title: "70s Roct Anthem Radio",
      subtitle: "Playlist Radio",
      icon: <FaEllipsisV />,
      coloured: true,
      time: "3:10",
    },
    {
      img: img3,
      title: "Star Talk Radio",
      subtitle: "Podcast",
      icon: <FaEllipsisV />,
      coloured: true,
      time: "6:14",
    },
    {
      img: img4,
      title: "Queen",
      subtitle: "Artist",
      icon: <FaEllipsisV />,
      coloured: true,
        time: "10:14",
     
    },
];
const list = [
    {
      img,
      
    },
    {
      img: img1,
     
    },
    {
      img: img2,
    
    },
    {
      img: img3,
     
    },
    {
      img: img4,
      
    },
    {
      img: img1,
     
    },
    {
      img: img3,
   
    },
    {
      img: img4,
     
     
    },
  ];
function Playlist() {
    const LibraryLists2 = list2.map((list, index) => (
        <SingleMusicLibrary key={index} {...list}  icon2/>
    ));
    const LibraryList = list.map((list, index) => <SingleFeature key={index} {...list}/>)
  return (
    <div className="playlist">
      <LibraryNav
        title="Playlists"
        icon={<MdSort className="library-nav-icon icon-size " />}
        icon2={<MdPlace className="library-nav-icon icon-2" />}
        icon3={<FaEllipsisV className="library-nav-icon " />}
          />
          <div className="playlist-nav">
              <h6 className="playlist-nav-title">Playlist songs</h6>
              <FaAngleUp className="playlist-nav-icon"/>
          </div>
          <div className="playlist-content">
              {LibraryLists2}
              <div className="featured">
                  <h6 className="library-recent-title">Featured Artist</h6>
                  <div className="single-feature">
                     {LibraryList}
                  </div>
              </div>
          </div>
    </div>
  );
}

export default Playlist;
