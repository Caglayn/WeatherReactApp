import React, { useState } from 'react';
import MessageItem from './MessageItem';

const Messages = (props) => {
    const{count} = props;
    const[expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    }
  return (
    <div>
        <li className="nav-item dropdown">
            <a className={"nav-icon dropdown-toggle " + (expanded && "show") } id="messagesDropdown" data-bs-toggle="dropdown" aria-expanded={expanded} onClick={toggleExpand}>
            <div className="position-relative">
                <i className="fa-regular fa-message"></i>
                <span className="indicator">{count}</span>
            </div>
            </a>
            <div className={"dropdown-menu dropdown-menu-lg dropdown-menu-end py-0 " + (expanded && "show") } data-bs-popper={expanded && "static"} aria-labelledby="messagesDropdown">
            <div className="dropdown-menu-header">
                <div className="position-relative">
                {count + " New Messages"}
                </div>
            </div>
            <div className="list-group">
                <MessageItem iconClass="fa-solid fa-user" title="Vanessa Tucker" body="Nam pretium turpis et arcu. Duis arcu tortor." timeText="15m ago" />
                <MessageItem iconClass="fa-solid fa-user" title="Vanessa Tucker" body="Nam pretium turpis et arcu. Duis arcu tortor." timeText="15m ago" />
                <MessageItem iconClass="fa-solid fa-user" title="Vanessa Tucker" body="Nam pretium turpis et arcu. Duis arcu tortor." timeText="15m ago" />
            </div>
            <div className="dropdown-menu-footer">
                <a className="text-muted">Show all messages</a>
            </div>
            </div>
        </li>
    </div>
  )
}

export default Messages