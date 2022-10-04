import { useState } from 'react'
import {
    useMantineTheme,
    Container,
    Paper,
    Title,
    Center,
    Card,
    Button,
    Group,
} from '@mantine/core'
import GroupTable from '../components/GroupTable'

import Head from 'next/head'

export default function Home() {
    const theme = useMantineTheme()
    return (
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
                            href="Groups/CreateGroup"
                            component="a"
                        >
                            {' '}
                            Create Group{' '}
                        </Button>
                        <Button color="yellow" size="lg" component="a">
                            {' '}
                            Join Private Group{' '}
                        </Button>
                    </Group>
                </Center>
            </Container>
        </>
    )
}
