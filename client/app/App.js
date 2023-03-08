import { AppDrawer } from '../features/drawer/index'
import SearchBox from "../features/search";
import React from 'react';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import Footer from '../features/footer';
import { ThemeProvider } from "@mui/system";
import { theme } from "../styles/theme"

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <Navbar />
      <AppRoutes />
      <AppDrawer />
      <SearchBox />
      <Footer />
      </ThemeProvider>
  );
};

export default App;
