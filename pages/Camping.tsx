import { useState } from 'react'
import { useMantineTheme } from '@mantine/core'

import Head from 'next/head'

export default function Camping() {
    const theme = useMantineTheme()
    return (
        <>
            <Head>
                <title>Camping</title>
            </Head>
            camping
        </>
    )
}
