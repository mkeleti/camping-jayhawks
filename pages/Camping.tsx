import { Container, Paper, Card, Title, Center, SimpleGrid, Button } from '@mantine/core';
import Head from 'next/head';
import type { NextPage } from 'next';
import { showNotification } from '@mantine/notifications';
import GroupTable from '../components/GroupTable';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
const Camping: NextPage = () => {
  const supabase = useSupabaseClient();
  const router = useRouter();


  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => showPosition(position));
    }
    else {
      return false;
    }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let ku = {lat: 38.95834, long: -95.24751}
  let correct_lat = (lat <= ku.lat + 0.01 && lat >= ku.lat - 0.01);
  let correct_long = (long <= ku.long + 0.01 && long >= ku.long - 0.01);
  if (correct_lat && correct_long) {
    vote();
  }
  else {
    return false;
  }
}

const user = useUser();
  async function vote() {
    showNotification({
      autoClose: 2000,
      title: 'Roll Called!',
      message: 'Group Members have been notified of Roll Call.',
    });
    const base = await supabase.from("voting").insert({suspend: false, email: [user.email],votes: 1});
    router.reload();
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
              onClick={() => {getLocation()}}
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
