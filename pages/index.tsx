import {
  Container,
  Paper,
  Title,
  Center,
  Card,
  Button,
  Group,
} from '@mantine/core';
import { NextLink } from '@mantine/next';
import Head from 'next/head';
import { NextPage } from 'next';
import GroupTable from '../components/GroupTable';

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
                        <Button
                          color="yellow"
                          size="lg"
                          component={NextLink}
                          href="Groups/CreateGroup"
                        >
                            Create Group
                        </Button>
                        <Button color="yellow" component={NextLink} href="/" size="lg">
                            Join Private Group{' '}
                        </Button>
                    </Group>
                </Center>
            </Container>
        </>
);

export default Home;
