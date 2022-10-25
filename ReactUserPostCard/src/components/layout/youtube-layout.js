import React from 'react';
import YoutubeHeader from './header';

import UsersComponent from '../containers/usersComponent';
import { Route , Routes } from 'react-router-dom';


function YoutubeLayout() {
  return (
    <div>
      <YoutubeHeader />
      <Routes>
             <Route path = "" element = {<UsersComponent />} exact/>             
      </Routes>
    </div>
  );
}

export default YoutubeLayout;
