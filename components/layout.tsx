import { useState } from 'react'
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
} from '@mantine/core'
import { HeaderSimple } from '../components/Header/header'
import { FooterCentered } from '../components/Footer/footer'

const links = [{ link: '/', label: 'Groups' },
{ link: '/Camping', label: 'Camping' },
{ link: '/Announcements', label: 'Announcements' }
]

export default function Layout({ children }) {
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)
    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            footer={
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Footer p="xs" height="30">
                        <FooterCentered links={links} />
                    </Footer>
                </MediaQuery>
            }
            header={
                <MediaQuery smallerThan={'sm'} styles={{ display: 'none' }}>
                    <Header p="md" height="60">
                        <HeaderSimple links={links}></HeaderSimple>
                    </Header>
                </MediaQuery>
            }
        >
            <main>{children}</main>
        </AppShell>
    )
}
