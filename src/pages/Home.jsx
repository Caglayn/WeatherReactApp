import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Content from '../components/content/Content';
import PageContainer from '../containers/PageContainer';

const Home = () => {
  const[sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebarExpanded = () => {
    setSidebarExpanded(!sidebarExpanded);
  }

  return (
    <div>
      <div className="wrapper">
        <Sidebar expanded={sidebarExpanded} />
        <div className="main">
          <Navbar sidebarExpandToggle={toggleSidebarExpanded} />
          <PageContainer />
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Home