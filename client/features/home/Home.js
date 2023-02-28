import React from 'react';
import { useSelector } from 'react-redux';
import Users from '../users/Users';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <>
    <div>
      <h3>Welcome, {username}</h3>
    </div>
    <Users />
    </>
  );
};

export default Home;
