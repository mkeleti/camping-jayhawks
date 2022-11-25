import { Container, Paper, Title, Center, Card, Group, MediaQuery } from '@mantine/core';
import Head from 'next/head';
import { NextPage } from 'next';
import GroupTable from '../components/GroupTable';
import NextButton from '../components/NextButton';
import Login from '../components/Login';

const Home: NextPage = () => (
  <>
    <Head>
      <title>JayCamper</title>
    </Head>
    <Container>
      <Center>
        <Title>Login</Title>
      </Center>
      <Login></Login>
    </Container>
  </>
);

export default Home;
