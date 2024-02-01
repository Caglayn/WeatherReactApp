import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {clearToken, getTestUser, getUserInfo, setToken, testEndPoint} from "../api/UserService";
import { storeUser, deleteUser } from '../redux/UserSlice';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import {setMemoryUser, getMemoryUser, deleteMemoryUser} from "../utils/MemoryUtil";

function App() {
  const dispatch = useDispatch();
  const {user} = useSelector(store => store.user);
  const [loggedIn, setLoggedIn] = useState(Object.keys(user || '').length > 0);
  const [offlineMode, setOfflineMode] = useState(false);

  useEffect(() => {
    setLoggedIn(Object.keys(user || '').length > 0)
  }, [user]);

  useEffect(()=>{
    if(offlineMode != true){
      if(loggedIn == true){
        setToken(user.token);
        getUserInfo().then(response => {
          console.log(response);
          if(response.status === 200){
            dispatch(storeUser(response.data));
            setMemoryUser(response.data);
          }
        }).catch(err => {
          dispatch(deleteUser());
          deleteMemoryUser();
          clearToken();
        })
      }
    }
  }, []); 

  return (
    <div>
        <Router>
          <Routes>
            <Route path='*' element = {loggedIn ? <Home/> : <SignIn /> } />
            <Route path='/signup' element = {loggedIn ? <Navigate to="/" replace={true} /> : <SignUp/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
