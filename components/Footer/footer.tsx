import {
    createStyles,
    Group,
    Button,
    SimpleGrid,
} from '@mantine/core'

import { NextLink } from '@mantine/next'

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
}))

interface FooterCenteredProps {
    links: { link: string; label: string }[]
}

export function FooterCentered({ links }: FooterCenteredProps) {
    const { classes } = useStyles()
    const items = links.map((link) => (
        <Button
            key={link.label}
            className="button"
            color="blue"
            size="xs"
            component={NextLink}
            href={link.link}
        >
            {' '}
            {link.label}
        </Button>
    ))

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <Group className={classes.links}>{items}</Group>
                <SimpleGrid cols={1}>JayCamper</SimpleGrid>
            </div>
        </div>
    )
}
