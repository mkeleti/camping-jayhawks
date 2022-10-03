import { useState } from 'react'
import { useMantineTheme, Container, Paper, Title, Center, Card, Button } from '@mantine/core'
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
              <Center><Title>Camping Groups</Title></Center>
              <Card radius="md" shadow="sm" p="md" mt="lg">
                <Paper>
                    <GroupTable />
                </Paper>
              </Card>
              <Center mt="lg"><Button color="yellow" size="lg" > Create Group </Button></Center>
            </Container>
        </>
    )
}
