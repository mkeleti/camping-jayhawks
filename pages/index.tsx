import { useState } from 'react'
import { useMantineTheme, Container, Paper } from '@mantine/core'
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
                <Paper>
                    <GroupTable />
                </Paper>
            </Container>
        </>
    )
}
