import React from "react";
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
// import Button from '@mui/material/Button';

function Sidebar() {
    return(
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon />
            {/* <Button variant="contained" color="primary">
                Hello World
            </Button> */}
            {/* Sidebar option*/}
        </div>
    );
}

export default Sidebar;