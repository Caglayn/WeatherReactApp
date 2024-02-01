import React, { useState } from 'react';
import NotificationItem from './NotificationItem';

const Notifications = (props) => {
    const{count} = props;
    const[expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    }
  return (
    <div>
        <li className="nav-item dropdown">
            <a className={"nav-icon dropdown-toggle " + (expanded && "show")} aria-expanded={expanded} id="alertsDropdown" data-bs-toggle="dropdown" onClick={toggleExpand}>
            <div className="position-relative">
                <i className="fa-regular fa-bell"></i>
                <span className="indicator">{count}</span>
            </div>
            </a>
            <div className={"dropdown-menu dropdown-menu-lg dropdown-menu-end py-0 " + (expanded && "show") } data-bs-popper={expanded && "static"} aria-labelledby="alertsDropdown">
            <div className="dropdown-menu-header">
                {count + " New Notifications"}
            </div>
            <div className="list-group">
                <NotificationItem iconClass="fa-solid fa-circle-info" title="Update completed" body="Restart server 12 to complete the update." timeText="30m ago" />
            </div>
            <div className="dropdown-menu-footer">
                <a href="#" className="text-muted">Show all notifications</a>
            </div>
            </div>
        </li>
    </div>
  )
}

export default Notifications