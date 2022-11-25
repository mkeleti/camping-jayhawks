import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import NextButton from '../NextButton';
import logo from '../../public/logo.png';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).color,
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[]
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const user = useUser();
  const items = links.map((link) => (
        <NextButton color="blue" key={`${link.label}-`} href={link.link} title={link.label} />
  ));

  return (
        <Header height={60} mb={120}>
            <Container className={classes.header}>
                <Image src={logo} width={180} height={64} quality={100} />
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>

                <Burger
                  opened={opened}
                  onClick={toggle}
                  className={classes.burger}
                  size="sm"
                />
                {!user ? (<NextButton color="blue"  href={"/login"} title={"Login"} />) : (<NextButton color="green"  href={"/login"} title={"Sign Out"} />)}
            </Container>
            
        </Header>
  );
}
