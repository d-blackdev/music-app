import React from 'react'
import './LibraryList.css'
import {Link} from 'react-router-dom'

function LibraryList(props) {
    return (
        <div className="library-list">
            <Link className="library-list-link" to={props.link ? `/${props.link}` : `#`}> <span className="librarylist-icon">{props.icon}</span></Link>
            <Link className="library-list-link" to={props.link ? `/${props.link}`: `#`}>  <h6 className="librarytext">{props.title} <span className="num">{props.num ? props.num : null}</span></h6></Link>
           
        </div>
    )
}

export default LibraryList
