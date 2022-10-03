import { useState } from 'react'
import { useMantineTheme, Anchor, Center, Title, Container } from '@mantine/core'

import Head from 'next/head'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default function Announcements() {
    const theme = useMantineTheme()
    return (
        <>
            <Head>
                <title>Announcements</title>
            </Head>
            <div>
                <Container>
                  <Center><Title>Announcements</Title></Center>
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="KUBBallCamping"
                        noHeader={true}
                        noFooter={true}
                        />
                </Container>
            </div>
        </>
    )
}
