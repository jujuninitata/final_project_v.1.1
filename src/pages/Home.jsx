import React, { useEffect } from 'react';
import { Link as RouterLink, redirect, useNavigate } from 'react-router-dom';
import Layout from '../components/Dashboard/Layout';
import { checkToken } from '../helpers/session';
import useGlobal from '../store/global';

const Home = () => {
  const setSession = useGlobal((state) => state.setSession);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = checkToken();
    if (isLoggedIn) {
      setSession(isLoggedIn);
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <Layout>
      <div>Home</div>
    </Layout>
  );
};

export default Home;
