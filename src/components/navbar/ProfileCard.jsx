import React, { useEffect, useMemo, useState } from 'react'
import { clearToken, logout } from '../../api/UserService';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../redux/UserSlice';
import { deleteMemoryUser } from '../../utils/MemoryUtil';

const ProfileCard = (props) => {
  const storeUser = useSelector(store => store.user.user);

  const user = useMemo(() => storeUser, [storeUser]);

  const [userName, setUserName] = useState(user.name + ' ' + user.surname);
  const[expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();

  const toggleExpand = () => {
      setExpanded(!expanded);
  }

  useEffect(()=>{console.log(user)}, [user]);

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
      <li className="nav-item dropdown">
        <a className={"nav-link dropdown-toggle d-none d-sm-inline-block " + (expanded && "show")} aria-expanded={expanded} data-bs-toggle="dropdown" onClick={toggleExpand}>
          <span className="text-dark">{userName}</span>
        </a>
        <div className={"dropdown-menu dropdown-menu-end " + (expanded && "show") } data-bs-popper={expanded && "static"}>
          <a className="dropdown-item"><i className="fa-regular fa-user"></i> Profile</a>
          <a className="dropdown-item"><i className="fa-solid fa-chart-pie"></i> Analytics</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item"><i className="fa-solid fa-gear"></i> Settings & Privacy</a>
          <a className="dropdown-item"><i className="fa-regular fa-circle-question"></i> Help Center</a>
          <div className="dropdown-divider"></div>
          <a onClick={handleOnClickLogout} className="dropdown-item">Log Out</a>
        </div>
      </li>
    </div>
  )
}

export default ProfileCard