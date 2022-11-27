import { Container, Paper, Title, Center, Card, Group, MediaQuery } from '@mantine/core';
import Head from 'next/head';
import { NextPage } from 'next';
import GroupTable from '../components/GroupTable';
import NextButton from '../components/NextButton';
import Login from '../components/Login';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

const Home: NextPage = () => {
  const user = useUser();
  return (
    <>
      <Head>
        <title>JayCamper</title>
      </Head>
      <Container>
        <Center>
          <Title> {!user ? 'Login' : 'Sign Out'}</Title>
        </Center>
        <Login></Login>
      </Container>
    </>
  );
};

export default Home;
