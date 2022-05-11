import React from "react";
import './Sidebar.css'
import SidebarOption from "./SidebarOption";
import TwitterIcon from '@mui/icons-material/Twitter';

function Sidebar() {
    return(
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon />
            {/* Sidebar option*/}
            <SidebarOption />
            
        </div>
    );
}

export default Sidebar;