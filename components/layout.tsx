import {
  AppShell,
  Header,
  Footer,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';

import { HeaderSimple } from './Header/header';
import { FooterCentered } from './Footer/footer';

const links = [{ link: '/', label: 'Groups' },
  { link: '/Camping', label: 'Camping' },
  { link: '/Announcements', label: 'Announcements' },
];
export default function Layout({ children }) {
  const theme = useMantineTheme();

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
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Header p="md" height="60">
                        <HeaderSimple links={links} />
                    </Header>
                </MediaQuery>
            }
        >
            <main>{children}</main>
        </AppShell>
  );
}
