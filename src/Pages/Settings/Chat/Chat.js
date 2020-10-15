import React from "react";
import "./Chat.css";
import { MdSort, MdPlace } from "react-icons/md";
import { FaEllipsisV, FaAngleUp,FaPlus } from "react-icons/fa";
import LibraryNav from "../../../Component/Library/LibraryNav/LibraryNav";
import SingleChat from "../../../Component/SingleChat/SingleChat";
import img from '../../../assests/images/img.jpg'
import img1 from '../../../assests/images/img1.jpg'
import img2 from '../../../assests/images/img2.jpg'
import img3 from '../../../assests/images/img3.jpg'
import img4 from '../../../assests/images/img4.jpg'

const list = [
    {
      img,
        name: "Segun James",
        num: '5',
        msg: 'Have you seen it?',
        time:'Today'
    },
    {
      img: img1,
      name: "Anthony Joshua",
        num: '2',
        msg: 'Won the fight flawlessly',
        time:'Yesterday'
    },
    {
      img: img2,
      name: "Mercy Jane",
      time:'Today',
      msg: 'Good day mom'
    },
    {
      img: img3,
      name: "Mike mill",
        msg: 'Good groove last night',
        time:'2-weeks ago'
    },
    {
      img: img4,
      name: "Mike mill",
      msg: 'Buy meat on your way',
        time: '10:45pm',
      num:'4'
    },
    {
      img: img1,
      name: "Mufu Sodiq",
      msg: 'Bye!',
        time: 'Today',
   
    },
    {
      img: img3,
      name: "Rachel micheal",
      msg: 'Good groove last night',
        time: '02:45am',
    
    },
    {
      img: img4,
      name: "Mike mill",
      msg: 'Good groove last night',
        time: '10:45pm',
      num:'4'
     
    },
  ];

function Chat() {
    const ChatHistory = list.map((list, index) => <SingleChat key={index} {...list}/>)
  return (
    <div className="chat">
      <LibraryNav
        title="Chat"
        icon={<MdSort className="library-nav-icon icon-size " />}
        icon2={<MdPlace className="library-nav-icon icon-2" />}
        icon3={<FaEllipsisV className="library-nav-icon " />}
          />
          <div className="addchat"><FaPlus className="add-icon"/></div>
          <div className="chat-content">
                {ChatHistory}
          </div>
    </div>
  );
}

export default Chat;
