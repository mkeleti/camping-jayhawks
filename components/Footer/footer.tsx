import {
  Center,
  createStyles,
  Group,
  SimpleGrid,
  Image,
} from '@mantine/core';

import NextButton from '../NextButton';

const useStyles = createStyles((theme) => ({
  footer: {},

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      marginBottom: theme.spacing.xs,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[]
}

export function FooterCentered({ links }: FooterCenteredProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
        <NextButton
          key={link.label}
          title={link.label}
          color="blue"
          size="xs"
          href={link.link}
        />
  ));

  return (
        <div className={classes.footer}>
            <div className={classes.inner}>
            <Center><Group className={classes.links}>{items}</Group></Center>
                <SimpleGrid cols={1}><Image src="logo.png" width={100} /></SimpleGrid>
            </div>
        </div>
  );
}
