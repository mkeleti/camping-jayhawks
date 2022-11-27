import { Container, Paper, Card, Title, Center, SimpleGrid, Button } from '@mantine/core';
import Head from 'next/head';
import type { NextPage } from 'next';
import { showNotification } from '@mantine/notifications';
import GroupTable from '../components/GroupTable';

const Camping: NextPage = () => (
  <>
    <Head>
      <title>Camping</title>
    </Head>
    <Center>
      <Title> Camping </Title>
    </Center>
    <Container>
      <Card shadow="sm" mt="lg" radius="lg">
        <Paper>
          <SimpleGrid cols={2} mb="xl">
            <Button
              color="green"
              onClick={() => {
                showNotification({
                  autoClose: 5000,
                  title: 'Roll Called!',
                  message: 'Group Members have been notified of Roll Call.',
                });
              }}
            >
              Roll Call
            </Button>
            <Button
              color="green"
              onClick={() => {
                showNotification({
                  autoClose: 5000,
                  color: 'pink',
                  title: 'Roll Call Suspended!',
                  message: 'Roll Call has been suspended.',
                });
              }}
            >
              Suspend
            </Button>
          </SimpleGrid>
          <GroupTable />
        </Paper>
      </Card>
    </Container>
  </>
);

export default Camping;
