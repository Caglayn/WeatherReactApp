import React from 'react'

const SidebarHeader = (props) => {
    const {text} = props;
  return (
    <div>
        <li className="sidebar-header">
            {text}
        </li>
    </div>
  )
}

export default SidebarHeader