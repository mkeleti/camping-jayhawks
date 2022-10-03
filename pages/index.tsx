import { useState } from 'react'
import { useMantineTheme } from '@mantine/core'

import Head from 'next/head'

export default function Home() {
    const theme = useMantineTheme()
    return (
        <>
            <Head>
                <title>Groups</title>
            </Head>
            groups
        </>
    )
}
