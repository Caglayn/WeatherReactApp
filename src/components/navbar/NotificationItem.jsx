import React from 'react'

const NotificationItem = (props) => {
    const{nav, iconClass, title, body, timeText} = props;

  return (
    <div>
        <a href={nav} className="list-group-item">
            <div className="row g-0 align-items-center">
                <div className="col-2">
                <i className={iconClass}></i>
                </div>
                <div className="col-10">
                    <div className="text-dark">{title}</div>
                    <div className="text-muted small mt-1">{body}</div>
                    <div className="text-muted small mt-1">{timeText}</div>
                </div>
            </div>
        </a>    
    </div>
  )
}

export default NotificationItem