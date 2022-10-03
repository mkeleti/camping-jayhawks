import { useState } from 'react';
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
} from '@mantine/core';
import Head from 'next/head';

const links = [ {link: "https://mantine.dev", label: "Home"}];

export default function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
<>
<Head>
  <title>Home</title>
</Head>
</>
  );
}