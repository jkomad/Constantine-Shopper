import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome To SnackBar, {username}: The world's NUMBER ONE online gamer snack supplier. Buy delicious gamer snacks from our website, and get it delivered to YOUR ROOM in the matter of seconds, so you can eat them deiliciousnesses num num num num and never leave your gaming set</h3>
    </div>
  );
};

export default Home;
