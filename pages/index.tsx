import {
  Container,
  Paper,
  Title,
  Center,
  Text,
  Card,
  Group,
  MediaQuery,
  Grid,
} from '@mantine/core';
import Head from 'next/head';
import { NextPage } from 'next';
import GroupTable from '../components/GroupTable';
import NextButton from '../components/NextButton';
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
          <Title>Camping Groups</Title>
        </Center>
        <Center>
          {!user && (
            <Text color={'red'}>You must sign in or create an account to join/create a group.</Text>
          )}
        </Center>
        <Card radius="md" shadow="sm" p="md" mt="lg">
          <Paper>
            <GroupTable />
          </Paper>
        </Card>
        <Center mt="lg">
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Center>
              <Group>
                <Center>
                  {!user ? (
                    <NextButton
                      disabled
                      href="/Groups/CreateGroup"
                      title="Create Group"
                      size="lg"
                      color="yellow"
                    />
                  ) : (
                    <NextButton
                      href="/Groups/CreateGroup"
                      title="Create Group"
                      size="lg"
                      color="yellow"
                    />
                  )}
                </Center>
                <Center>
                  {!user ? (
                    <NextButton
                      disabled
                      href="/Groups/Private/Join"
                      title="Join Private Group"
                      size="lg"
                      color="yellow"
                    />
                  ) : (
                    <NextButton
                      href="/Groups/Private/Join"
                      title="Join Private Group"
                      size="lg"
                      color="yellow"
                    />
                  )}
                </Center>
              </Group>
            </Center>
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Center>
              <Group>
                <Center>
                  {!user ? (
                    <NextButton
                      disabled
                      href="/Groups/CreateGroup"
                      title="Create Group"
                      size="sm"
                      color="yellow"
                    />
                  ) : (
                    <NextButton
                      href="/Groups/CreateGroup"
                      title="Create Group"
                      size="sm"
                      color="yellow"
                    />
                  )}
                </Center>
                <Center>
                  {!user ? (
                    <NextButton
                      disabled
                      href="/Groups/Private/Join"
                      title="Join Private Group"
                      size="sm"
                      color="yellow"
                    />
                  ) : (
                    <NextButton
                      href="/Groups/Private/Join"
                      title="Join Private Group"
                      size="sm"
                      color="yellow"
                    />
                  )}
                </Center>
              </Group>
            </Center>
          </MediaQuery>
        </Center>
      </Container>
    </>
  );
};

export default Home;
