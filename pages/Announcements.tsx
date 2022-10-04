import { useState, useEffect } from 'react'
import {
    useMantineTheme,
    Anchor,
    Center,
    Title,
    Container,
    Card,
    Paper,
    Skeleton,
} from '@mantine/core'
import Head from 'next/head'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default function Announcements() {
    const theme = useMantineTheme()
    const [loading, setLoading] = useState(true)

    function counter() {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 7000)
    }

    useEffect(() => {
        counter()
    }, [])

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
                        <Paper
                            sx={
                                loading
                                    ? { display: 'none' }
                                    : { display: 'block' }
                            }
                        >
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="KUBBallCamping"
                                noHeader={true}
                                noFooter={true}
                                transparent={true}
                            />
                        </Paper>
                        <Paper
                            sx={
                                loading
                                    ? { display: 'block' }
                                    : { display: 'none' }
                            }
                        >
                            <>
                                <Skeleton height={50} circle mb="xl" />
                                <Skeleton height={20} radius="xl" />
                                <Skeleton height={20} mt={6} radius="xl" />
                                <Skeleton
                                    height={20}
                                    mt={6}
                                    width="70%"
                                    radius="xl"
                                />
                                <Skeleton height={50} circle mb="xl" />
                                <Skeleton height={20} radius="xl" />
                                <Skeleton height={20} mt={6} radius="xl" />
                                <Skeleton
                                    height={20}
                                    mt={6}
                                    width="70%"
                                    radius="xl"
                                />
                                <Skeleton height={50} circle mb="xl" />
                                <Skeleton height={20} radius="xl" />
                                <Skeleton height={20} mt={6} radius="xl" />
                                <Skeleton
                                    height={20}
                                    mt={6}
                                    width="70%"
                                    radius="xl"
                                />
                                <Skeleton height={50} circle mb="xl" />
                                <Skeleton height={20} radius="xl" />
                                <Skeleton height={20} mt={6} radius="xl" />
                                <Skeleton
                                    height={20}
                                    mt={6}
                                    width="70%"
                                    radius="xl"
                                />
                                <Skeleton height={50} circle mb="xl" />
                                <Skeleton height={20} radius="xl" />
                                <Skeleton height={20} mt={6} radius="xl" />
                                <Skeleton
                                    height={20}
                                    mt={6}
                                    width="70%"
                                    radius="xl"
                                />
                                <Skeleton height={50} circle mb="xl" />
                                <Skeleton height={20} radius="xl" />
                                <Skeleton height={20} mt={6} radius="xl" />
                                <Skeleton
                                    height={20}
                                    mt={6}
                                    width="70%"
                                    radius="xl"
                                />
                            </>
                        </Paper>
                    </Card>
                </Container>
            </div>
        </>
    )
}
