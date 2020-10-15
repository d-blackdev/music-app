import React from 'react'
import './SingleChat.css'
import img from '../../assests/images/img.jpg'

function SingleChat(props) {
    return (
        <div className="singlechat">
            <div className="single-content-1">
                <div className="single-chat-img-cont">
                    <img src={props.img} alt="img" className="single-chat-img"/>
                </div>
                <div className="single-chat-texts">
                    <h6 className="single-chat-name">{props.name}</h6>
                    <h6 className="single-chat-title">{props.msg}</h6>
                </div>
            </div>
            <div className="single-content-2">
                {props.num ?  <div className="content-2-text-cont">
                    <h6 className="content-2-text">{props.num}</h6>
                </div> : <div className="nums"></div>}
               
                <h6 className="content-2-text2">{props.time}</h6>
            </div>
        </div>
    )
}

export default SingleChat
