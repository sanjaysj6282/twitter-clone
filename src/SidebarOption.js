// To add functionalities like hover to sidebar
import React from 'react'
import "./SidebarOption.css";

// Icon is a component so it should be CAPS
function SidebarOption({text, Icon}) {
  return (
    <div className="sidebarOption">
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption