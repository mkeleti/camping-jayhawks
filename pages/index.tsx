import {
  Container,
  Paper,
  Title,
  Center,
  Card,
  Group,
  MediaQuery,
} from '@mantine/core';
import Head from 'next/head';
import { NextPage } from 'next';
import GroupTable from '../components/GroupTable';
import NextButton from '../components/NextButton';

const Home: NextPage = () => (
        <>
            <Head>
                <title>JayCamper</title>
            </Head>
            <Container>
                <Center>
                    <Title>Camping Groups</Title>
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
                        <NextButton href="/Groups/CreateGroup" title="Create Group" size="lg" color="yellow" />
                        </Center>
                        <Center>
                        <NextButton href="/Groups/Private/Join" title="Join Private Group" size="lg" color="yellow" />
                        </Center>
                    </Group>
                    </Center>
                    </MediaQuery>
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Center>
                    <Group>
                        <Center>
                        <NextButton href="/Groups/CreateGroup" title="Create Group" size="sm" color="yellow" />
                        </Center>
                        <Center>
                        <NextButton href="/Groups/Private/Join" title="Join Private Group" size="sm" color="yellow" />
                        </Center>
                    </Group>
                    </Center>
                    </MediaQuery>
                </Center>
            </Container>
        </>
);

export default Home;
