import type { NextPage } from 'next';
import { Container, Paper, Title, Center, Card, Group, MediaQuery } from '@mantine/core';
import Head from 'next/head';

export const fourofour: NextPage = () => (
  <>
    <Head>
      <title>404</title>
    </Head>
    <Container>
      <Center>
        <Title>404</Title>
      </Center>
      <Card radius="md" shadow="sm" p="md" mt="lg">
        <Paper>
          <Center>
            <Title>Page Not Found</Title>
          </Center>
        </Paper>
      </Card>
    </Container>
  </>
);

export default fourofour;
