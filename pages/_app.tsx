import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, SimpleGrid } from '@mantine/core';
import { NotificationsProvider, showNotification } from '@mantine/notifications';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import Layout from '../components/layout';
import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import { time } from 'console';
import { RealtimePostgresUpdatePayload } from '@supabase/supabase-js';


export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const [opened, setOpened] = useState(false);
  const [subscription, setSubscription] = useState(null);
  // Supabase client setup

  const channel = supabaseClient
    .channel('table-db-changes')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'voting' }, (payload) => {
      setSubscription(payload.new);
      setOpened(true);
    })
    .subscribe();
  return (
    <>
      <Head>
        <title>JayCamper</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          colors: {
            red: [
              '#ffe4e8',
              '#fbb9bf',
              '#f38d94',
              '#ec606b',
              '#e53341',
              '#cc1a27',
              '#9f121d',
              '#720a15',
              '#47050a',
              '#1f0000',
            ],

            light: [
              '#eff9eb',
              '#d1edc8',
              '#b2e1a2',
              '#93d57c',
              '#75ca57',
              '#5cb03e',
              '#488931',
              '#346224',
              '#1f3a15',
              '#091406',
            ],
            base: [
              '#e3f9fc',
              '#c4e9ea',
              '#a4d8da',
              '#82c9cc',
              '#61b8bc',
              '#499fa3',
              '#367c7f',
              '#25595b',
              '#113638',
              '#001414',
            ],
            'dark-accent': [
              '#e2f5ff',
              '#c4dded',
              '#a3c5da',
              '#81aeca',
              '#6096b9',
              '#467d9f',
              '#34617d',
              '#23455b',
              '#0f2b39',
              '#00101a',
            ],
            dark: [
              '#e7f1ff',
              '#c4d5ef',
              '#9fbadf',
              '#7a9ed1',
              '#5682c4',
              '#3c69aa',
              '#2f5285',
              '#203a60',
              '#10233b',
              '#000d19',
            ],
          },
          primaryColor: 'base',
          fontFamily: 'Poppins, sans-serif',
          /** Global Styling */
          globalStyles: (theme) => ({
            '*, *::before, *::after': {
              boxSizing: 'border-box',
            },

            body: {
              ...theme.fn.fontStyles(),
              //backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
              color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
              lineHeight: theme.lineHeight,
            },
            '.button': {
              fontWeight: 600,
            },
            '.title': {
              fontWeight: 800,
            },

            '#your-id > [data-active]': {
              backgroundColor: 'pink',
            },
          }),
        }}
      >
        <NotificationsProvider position="top-right" zIndex={2077}>
          <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
          >
            <Layout>
              <Modal opened={opened} onClose={() => setOpened(false)} title="Roll Call!">
                <SimpleGrid cols={2}>
                <Button color="green" >Yes</Button>
                <Button color="red" >No</Button>
                </SimpleGrid>
              </Modal>
              <Component {...pageProps} />
            </Layout>
          </SessionContextProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
