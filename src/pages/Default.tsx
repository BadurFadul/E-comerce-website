import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from './Card';
import Home from './Home';

const Default: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header handleClickOpen={handleClickOpen} />
      <Card open={open} handleClose={handleClose} />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Default;