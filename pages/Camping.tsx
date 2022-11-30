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
                function sleep (time) {
                  return new Promise((resolve) => setTimeout(resolve, time));
                }
                sleep(5000).then(() => {
                  var len = document.getElementsByClassName("mantine-Table-root mantine-c0ix2")[0].children[1].children.length;
                  var index = Math.floor(len * Math.random());
                  document.getElementsByClassName("mantine-Table-root mantine-c0ix2")[0].children[1].children[index].remove()
                });
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
