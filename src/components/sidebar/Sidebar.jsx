import React from 'react';
import SidebarItem from './SidebarItem';
import SidebarHeader from './SidebarHeader';
import Logo from './Logo';
import { clearToken, logout } from '../../api/UserService';
import { deleteMemoryUser } from '../../utils/MemoryUtil';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/UserSlice';

const Sidebar = (props) => {
  const{expanded} = props;

  const dispatch = useDispatch();

  const handleOnClickLogout = () => {
    logout().then(response => {
      deleteMemoryUser();
      dispatch(deleteUser());
      clearToken();
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <div>
        <nav id="sidebar" className={"sidebar js-sidebar " + (expanded && "collapsed")}>
          <div className="sidebar-content js-simplebar">
            <Logo />
            <ul className="sidebar-nav">
              <SidebarHeader text="Pages" />

              <SidebarItem text="Dashboard" classText="fa-solid fa-sliders" isActive={true} />

              <SidebarItem text="Profile" classText="fa-regular fa-user" />

              <SidebarItem text="Log Out" classText="fa-solid fa-right-from-bracket" onClick={handleOnClickLogout} />

              <SidebarItem text="Blank" classText="fa-solid fa-tag" />
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Sidebar