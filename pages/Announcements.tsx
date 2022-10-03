import { useState } from 'react'
import { useMantineTheme, Anchor, Container } from '@mantine/core'

import Head from 'next/head'

export default function Announcements() {
    const theme = useMantineTheme()
    return (
        <>
            <Head>
                <title>Announcements</title>
            </Head>
            <div>
                <Container>
                    <Anchor
                        className="twitter-timeline"
                        data-theme="light"
                        href="https://twitter.com/KUBBallCamping?ref_src=twsrc%5Etfw"
                    >
                        Tweets by KUBBallCamping
                    </Anchor>{' '}
                    <script
                        async
                        src="https://platform.twitter.com/widgets.js"
                        charSet="utf-8"
                    ></script>
                </Container>
            </div>
        </>
    )
}
