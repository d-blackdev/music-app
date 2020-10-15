import React from 'react'
import './SplashScreen.css'
import Logo from '../../assests/images/Logo.png'

function SplashScreen() {
    return (
        <div className="splash">
            <div className="splash-img-cont"><img className="splash-img" src={Logo} alt="spalsh" /></div>
            <h1 className="splash-text">Napollo</h1>
            
        </div>
    )
}

export default SplashScreen
