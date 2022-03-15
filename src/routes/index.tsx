import React from 'react';

import { Routes as BrowserRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Post from '../pages/Post';

const Routes: React.FC = () => {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />

    </BrowserRoutes>
  );
};

export default Routes;
