import React from "react";
import LibraryNav from "../Library/LibraryNav/LibraryNav";
import "./Home.css";
import { MdSort, MdPlace } from "react-icons/md";
import { FaEllipsisV, FaAngleDown, FaSortAmountDown } from "react-icons/fa";
import img from "../../assests/images/img.jpg";
import img1 from "../../assests/images/img1.jpg";
import img2 from "../../assests/images/img2.jpg";
import img3 from "../../assests/images/img3.jpg";
import img4 from "../../assests/images/img4.jpg";
import SingleMusicLibrary from "../Library/SingleMusicLibrary/SingleMusicLibrary";
import HomePlay from "./HomePlay/HomePlay";

const list2 = [
  {
    img,
    title: "Queen",
    subtitle: "Artist",
    icon: <FaEllipsisV />,
    coloured: true,
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
function Home() {
  const LibraryLists2 = list2.map((list, index) => (
    <SingleMusicLibrary key={index} {...list} />
  ));
  return (
    <div className="album">
      <div className="album-content">
        <LibraryNav
          title="My Albums"
          icon={<MdSort className="library-nav-icon icon-size " />}
          icon2={<MdPlace className="library-nav-icon icon-2" />}
          icon3={<FaSortAmountDown className="library-nav-icon " />}
        />
        <div className="album-body">{LibraryLists2}</div>
      </div>
      <HomePlay />
    </div>
  );
}

export default Home;
