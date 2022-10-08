import {
  Container,
  Paper,
  Title,
  Center,
  Card,
  Group,
} from '@mantine/core';
import Head from 'next/head';
import { NextPage } from 'next';
import GroupTable from '../components/GroupTable';
import NextButton from '../components/NextButton';

const Home: NextPage = () => (
        <>
            <Head>
                <title>Groups</title>
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
                    <Group>
                        <NextButton href="/Groups/CreateGroup" title="Create Group" size="lg" color="yellow" />
                        <NextButton href="/Groups/Private/Join" title="Join Private Group" size="lg" color="yellow" />
                    </Group>
                </Center>
            </Container>
        </>
);

export default Home;
