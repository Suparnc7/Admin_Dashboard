import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import {Link} from 'react-router-dom';
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'> Dashboard </h3>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <HomeIcon/> Home
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon/> Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon/> Market
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'> Quick Menu </h3>
                <ul className='sidebarList'>
                    <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <PermIdentityIcon/> Users
                        </li>
                    </Link>
                    <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <StorefrontIcon/> Products
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoneyIcon/> Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChartIcon/> Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'> Notifiactions </h3>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <MailOutlineIcon/> Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeedIcon/> Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineIcon/> Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'> Staff </h3>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <WorkOutlineIcon/> Manage
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon/> Analytics
                    </li>
                    <li className="sidebarListItem">
                        <ReportIcon/> Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
