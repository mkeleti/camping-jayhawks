// eslint-disable-next-line import/named
import { Button, MantineSize, DefaultMantineColor } from '@mantine/core';
import Link from 'next/link';
import { UrlObject } from 'url';

declare type Url = string | UrlObject;
type ButtonProps = {
    href: Url;
    color?: DefaultMantineColor | undefined;
    size?: MantineSize | undefined;
    title: string;
}

const defaultProps: ButtonProps = {
    href: '/',
    color: 'blue',
    size: 'md',
    title: 'Next',
};
const NextButton = (props: ButtonProps) =>{ 
    return (
        <Link href={props.href} passHref>
            <Button component="a" color={props.color} size={props.size}>{props.title}</Button>
        </Link>
    )
}
NextButton.defaultProps = defaultProps;

export default NextButton