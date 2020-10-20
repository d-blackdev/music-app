import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { MdPlace, MdSort } from "react-icons/md";
import DiscoverArtist from "../../Component/DiscoverArtist/DiscoverArtist";
import LibraryNav from "../../Component/Library/LibraryNav/LibraryNav";
import "./Discover.css";
import img from "../../assests/images/img.jpg";
import img1 from "../../assests/images/img1.jpg";
import img2 from "../../assests/images/img2.jpg";
import img3 from "../../assests/images/img3.jpg";
import img4 from "../../assests/images/img4.jpg";
import img5 from "../../assests/images/img5.jpg";
import SwipeableViews from "react-swipeable-views";
import AlbumViews from "../../Component/DiscoverArtist/AlbumViews/AlbumViews";
import SongView from "../../Component/DiscoverArtist/SongsViews/SongView";

const List = [
  {
    img,
    name: "Adele",
    genre: "Soul",
  },
  {
    img: img1,
    name: "Lil Wayne",
    genre: "Hip-Hop",
  },
  {
    img: img2,
    name: "R-Kelly",
    genre: "R&B",
  },
  {
    img: img3,
    name: "Wizkid",
    genre: "Afro",
  },
  {
    img: img4,
    name: "Drake",
    genre: "Hip-Hop",
  },
  {
    img: img5,
    name: "Beyonce",
    genre: "Apala",
  },
];
const AlbumLists = [
  {
    img:img3,
    artist: "Wizkid",
    title: "Live in lagos",
    num: "50k",
  },
  {
    img: img4,
    artist: "Lil Wayne",
    title: "carter IV",
    num: "90k",
  },
  {
    img: img5,
    artist: "Burna-boy",
    title: "twice as tall",
    num: "10M",
  },
  {
    img: img,
    title: "Live in Africa",
    num: "100M",
    artist: "Beyonce",
  },
  {
    img: img1,
    artist: "Drake",
    title: "xoxo",
    num: "150M",
  },
  {
    img: img2,
    artist: "Adele",
    title: "American Wonder",
    num: "150M",
  },
];
const SongLists = [
  {
    img: img4,
    artist: "Wizkid",
    title: "Live in lagos",
    num1: "50k",
    num2: "70k",
  },
  {
    img: img2,
    artist: "Lil Wayne",
    title: "carter IV",
    num1: "90k",
    num2: "120k",
  },
  {
    img: img1,
    artist: "Burna-boy",
    title: "twice as tall",
    num1: "70k",
    num2: "300k",
  },
  {
    img: img,
    title: "Live in Africa",
    num1: " 100M",
    num2: "200M",
    artist: "Beyonce",
  },
  {
    img: img3,
    artist: "Drake",
    title: "xoxo",
    num1: "350k",
    num2: "500M",
  },
  {
    img: img4,
    artist: "Adele",
    title: "American Wonder",
    num1: "900M",
    num2: "300k",
  },
];

function Discover() {
  const Lists = List.map((list, index) => (
    <DiscoverArtist key={index} {...list} height="300" />
  ));
  const Lists2 = AlbumLists.map((list, index) => (
    <AlbumViews key={index} {...list} />
  ));
  const Lists3 = SongLists.map((list, index) => (
    <SongView key={index} {...list} />
  ));
  return (
    <div className="discover">
      <div className="discovery-nav">
        <LibraryNav
          title="Discovery"
          icon={<MdSort className="library-nav-icon icon-size " />}
          icon2={<MdPlace className="library-nav-icon icon-2" />}
          icon3={<FaEllipsisV className="library-nav-icon " />}
        />
      </div>
      <div className="discover-content">
        <SwipeableViews enableMouseEvents>{Lists}</SwipeableViews>
        <div className="albums-views">
          <h6 className="album-title">Top Albums</h6>
          <SwipeableViews enableMouseEvents>{Lists2}</SwipeableViews>
        </div>
        <div className="albums-views">
          <h6 className="album-title">Top Songs</h6>
            {Lists3}
        </div>
      </div>
    </div>
  );
}

export default Discover;
