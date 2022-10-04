import {
    Container,
    Paper,
    Text,
    Card,
    Title,
    Center,
    SimpleGrid,
    Button,
} from '@mantine/core'
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
                            <Button color="green">Roll Call</Button>
                            <Button color="yellow">Suspend</Button>
                        </SimpleGrid>
                    </Paper>
                </Card>
            </Container>
        </>
    )
}
