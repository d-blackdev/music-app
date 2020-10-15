import React from "react";
import "./Library.css";
import LibraryNav from "./LibraryNav/LibraryNav";
import {
  
  MdQueueMusic,
  MdSurroundSound,
  MdPlace,
} from "react-icons/md";
import {
  FaRegStar,
  FaHSquare,
  FaArrowAltCircleDown,
    FaRev,
  FaRegHeart,
  FaEllipsisV,
  FaCog,FaUserCircle
} from "react-icons/fa";
import LibraryList from "./LibraryList/LibraryList";
import SingleMusicLibrary from "./SingleMusicLibrary/SingleMusicLibrary";
import img from '../../assests/images/img.jpg'
import img1 from '../../assests/images/img1.jpg'
import img2 from '../../assests/images/img2.jpg'
import img3 from '../../assests/images/img3.jpg'
import img4 from '../../assests/images/img4.jpg'
import {Link} from 'react-router-dom'

const list = [
  { icon: <MdQueueMusic />, title: "Playlists", link:"playlists" },
  { icon: <FaRegHeart />, title: "Favourite Songs" },
  { icon: <FaRev />, title: "Albums", link:"albums"},
  { icon: <FaRegStar />, title: "Artists" },
  { icon: <MdSurroundSound />, title: "Podcasts" ,num: "+1"},
  { icon: <FaHSquare />, title: "Listening History" },
  { icon: <FaArrowAltCircleDown />, title: "Downloaded" },
];
const list2 = [
    { img, title: "Queen", subtitle: 'Artist', icon: <FaEllipsisV />,coloured: true },
    { img: img1, title: "70s Roct Anthem Radio", subtitle: 'Playlist Radio', icon: <FaEllipsisV />,coloured: true },
    { img: img2, title: "Progressive Rock", subtitle: 'Playlist', icon: <FaEllipsisV />,coloured: true },
    { img: img3, title: "Star Talk Radio", subtitle: 'Podcast', icon: <FaEllipsisV />,coloured: true },
    {img: img4,title:"Queen",subtitle:'Artist',icon:<FaEllipsisV/>,coloured: true},
]
function Library() {
    const LibraryLists = list.map((list, index) => <LibraryList key={index} {...list} />)
    const LibraryLists2 = list2.map((list,index) => <SingleMusicLibrary key={index} {...list}/>)
  return (
    <div className="library">
          <LibraryNav link="/profile" title="library" icon={<FaCog className="library-nav-icon icon1"/>} icon3={<FaUserCircle className="library-nav-icon" />} icon2={<MdPlace className="library-nav-icon icon-2"/>}/>
          <div className="library-content">
              {LibraryLists}
              <div className="libray-recent">
                  <h6 className="library-recent-title">Recently Played</h6>
                  {LibraryLists2}
              </div>
      </div>
    </div>
  );
}

export default Library;
