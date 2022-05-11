import React from "react";
import './Sidebar.css'
import SidebarOption from "./SidebarOption";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Sidebar() {
    return(
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon />
            {/* Sidebar option*/}
            <SidebarOption Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            
        </div>
    );
}

export default Sidebar;