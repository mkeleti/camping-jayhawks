import {
  Container,
  Paper,
  Card,
  Title,
  Center,
  SimpleGrid,
} from '@mantine/core';
import Head from 'next/head';
import type { NextPage } from 'next';
import NextButton from '../components/NextButton';

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
                        <SimpleGrid cols={2}>
                            <NextButton href="/" title="Roll Call" color="green" />
                            <NextButton href="/" title="Suspend" color="green" />
                        </SimpleGrid>
                    </Paper>
                </Card>
            </Container>
        </>
);

export default Camping;
