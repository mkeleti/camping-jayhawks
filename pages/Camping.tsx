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
import type { NextPage } from 'next'
const Camping: NextPage = () => {
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
                            <Button component={NextLink} href="/" color="green"><a>Roll Call</a></Button>
                            <Button component={NextLink} href="/"  color="yellow"><a>Suspend</a></Button>
                        </SimpleGrid>
                    </Paper>
                </Card>
            </Container>
        </>
    )
}

export default Camping;
