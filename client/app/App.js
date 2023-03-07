import { AppDrawer } from '../features/drawer/index'
import SearchBox from "../features/search";
import React from 'react';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import Footer from '../features/footer';
import Banner from '../features/banner';
import Promotions from '../features/promotions';

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Promotions />
      <AppRoutes />
      <AppDrawer />
      <SearchBox />
      <Footer />
    </div>
  );
};

export default App;
