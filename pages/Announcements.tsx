import { useState } from 'react'
import { useMantineTheme, Anchor, Center, Title, Container, Card, Paper } from '@mantine/core'

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
                <Container mb="lg">
                  <Center><Title mb="lg">Announcements</Title></Center>
                  <Card radius="lg" shadow="xl" mb="lg">
                    <Paper>
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="KUBBallCamping"
                        noHeader={true}
                        noFooter={true}
                        transparent={true}
                        />
                        </Paper>
                        </Card>
                </Container>
            </div>
        </>
    )
}
