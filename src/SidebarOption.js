// To add functionalities like hover to sidebar
import React from 'react'
import "./SidebarOption.css";

// Icon is a component so it should be CAPS
// Active component -> to set color blue unless changed
function SidebarOption({ active, text, Icon}) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption