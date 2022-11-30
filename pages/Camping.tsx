import { Container, Paper, Card, Title, Center, SimpleGrid, Button } from '@mantine/core';
import Head from 'next/head';
import type { NextPage } from 'next';
import { showNotification } from '@mantine/notifications';
import GroupTable from '../components/GroupTable';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
const Camping: NextPage = () => {
  const supabase = useSupabaseClient();
const user = useUser();
  async function vote() {
    showNotification({
      autoClose: 2000,
      title: 'Roll Called!',
      message: 'Group Members have been notified of Roll Call.',
    });
    const base = await supabase.from("voting").insert({suspend: false, email: [user.email],votes: 1});
  }
  return (
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
              onClick={() => vote()}
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
            }

export default Camping;
