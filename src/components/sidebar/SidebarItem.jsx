import React from 'react'

const SidebarItem = (props) => {
    const{text, nav, classText, isActive, id, onClick} = props;
  return (
    <div>
      <li className={"sidebar-item " + (isActive && "active")}>
        <a className="sidebar-link" href={nav} onClick={() => onClick(id)}>
        <i className={classText}></i> <span className="align-middle">{text}</span>
        </a>
      </li>
    </div>
  )
}

export default SidebarItem