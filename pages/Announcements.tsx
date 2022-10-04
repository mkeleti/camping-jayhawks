import {
    Center,
    Title,
    Container,
    Card,
} from '@mantine/core'
import Head from 'next/head'

import Timeline from '../components/TwitterTimeline';
export default function Announcements() {


    return (
        <>
            <Head>
                <title>Announcements</title>
            </Head>
            <div>
                <Container mb="lg">
                    <Center>
                        <Title mb="lg">Announcements</Title>
                    </Center>
                    <Card radius="lg" shadow="xl" mb="lg">
                        <Timeline />
                    </Card>
                </Container>
            </div>
        </>
    )
}
