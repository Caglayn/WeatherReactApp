import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Content from '../components/content/Content';

const PageContainer = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Content />} />
        {/*<Route path='/test' element={<TestContent />} />*/}
      </Routes>
    </div>
  )
}

export default PageContainer