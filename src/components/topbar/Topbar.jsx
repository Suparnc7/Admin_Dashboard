import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topleft">
                <span className="logo">
                    Suparn
                </span>
            </div>
            <div className="topright">
                <div className="topbarIconContainer">
                    <NotificationsIcon/>
                </div>
                <div className="topbarIconContainer">
                    <LanguageIcon/>
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon/>
                </div>
                <img src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?cs=srgb&dl=pexels-bruno-salvadori-2269872.jpg&fm=jpg" 
                    alt="User Profile" 
                    className='topAvatar'
                />
            </div>
        </div>
    </div>
  )
} 

export default Topbar