import React from 'react'
import './BottomNav.css'
import SingleNav from './SingleNav/SingleNav'


function BottomNav() {
    return (
        <div className="bottom-nav">
            <div className="bottom-nav-content">
                <SingleNav type="home"/>
                <SingleNav type="search"/>
                <SingleNav type="discovery"/>
                <SingleNav type="library"/>
           </div>
        </div>
    )
}

export default BottomNav
