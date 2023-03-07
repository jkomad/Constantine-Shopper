import { AppDrawer } from '../features/drawer/index'
import SearchBox from "../features/search";
import React from 'react';

import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <AppDrawer />
      <SearchBox />
    </div>
  );
};

export default App;
