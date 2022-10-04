import {
    Container,
    Paper,
    Card,
    Title,
    Center,
    SimpleGrid,
    Button,
} from '@mantine/core'
import { NextLink  } from '@mantine/next';
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
                        <SimpleGrid cols={2}>
                            <Button component={NextLink} href="/" color="green">Roll Call</Button>
                            <Button component={NextLink} href="/"  color="yellow">Suspend</Button>
                        </SimpleGrid>
                    </Paper>
                </Card>
            </Container>
        </>
    )
}
