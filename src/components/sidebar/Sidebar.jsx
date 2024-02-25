import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import SidebarHeader from './SidebarHeader';
import Logo from './Logo';
import { clearToken, logout } from '../../api/UserService';
import { deleteMemoryUser } from '../../utils/MemoryUtil';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/UserSlice';
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
  const{expanded} = props;

  const[sidebarItemList, setSidebarItemList] = useState([
    {text:'Daily Dashboard', id:'dailydashboard', classText:'fa-solid fa-calendar-day'},
    {text:'Hourly Dashboard', id:'hourlydashboard', classText:'fa-solid fa-clock'},
    {text:'Profile', id:'profile', classText:'fa-regular fa-user'}
  ]);

  const[activeItem, setActiveItem] = useState('dailyDashboard');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClickLogout = () => {
    logout().then(response => {
      deleteMemoryUser();
      dispatch(deleteUser());
      clearToken();
    }).catch(error => {
      console.log(error);
    });
  }

  const handleOnClickItem = (key) => {
    setActiveItem(key);
    navigate('/'+key, {replace:true});
  }

  return (
    <div>
        <nav id="sidebar" className={"sidebar js-sidebar " + (expanded && "collapsed")}>
          <div className="sidebar-content js-simplebar">
            <Logo />
            <ul className="sidebar-nav">
              <SidebarHeader text="Pages" />

              {
                sidebarItemList.map(item => 
                  <SidebarItem key={item.id} id={item.id} text={item.text} classText={item.classText} isActive={item.id==activeItem} onClick={handleOnClickItem} />
                  )
              }

              <SidebarItem text="Log Out" classText="fa-solid fa-right-from-bracket" onClick={handleOnClickLogout} />

              <SidebarItem id={'blank'} text="Blank" classText="fa-solid fa-tag" isActive={activeItem=='blank'} onClick={handleOnClickItem}/>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Sidebar