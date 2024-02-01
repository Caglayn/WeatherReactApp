import React from 'react'
import Notifications from './Notifications'
import Messages from './Messages'
import ProfileCard from './ProfileCard'

const Navbar = (props) => {
  const{sidebarExpandToggle} = props;

  return (
    <div>
      <nav className="navbar navbar-expand navbar-light navbar-bg">
        <a id='hamb' className="sidebar-toggle js-sidebar-toggle" onClick={sidebarExpandToggle}>
          <i className="hamburger align-self-center"></i>
        </a>

        <div className="navbar-collapse collapse">
          <ul className="navbar-nav navbar-align">
            <Notifications count={"4"} />
            <Messages count={"5"} />
            <ProfileCard />
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar