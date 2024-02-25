import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import Content from '../components/content/Content';
import HourlyContent from '../components/content/HourlyContent';

const PageContainer = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to="/dailydashboard" replace={true} />} />
        <Route path='/dailydashboard' element={<Content />} />
        <Route path='/hourlydashboard' element={<HourlyContent />} />
      </Routes>
    </div>
  )
}

export default PageContainer