import { Container, Paper, Text, Card, Title, Center } from '@mantine/core'
import Head from 'next/head'

export default function Camping() {
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
                        <Text>Camping Page</Text>
                    </Paper>
                </Card>
            </Container>
        </>
    )
}