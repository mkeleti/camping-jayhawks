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
  disabled?: boolean | undefined;
};

const NextButton = (props: ButtonProps) => (
  <Link href={props.href} passHref>
    {props.disabled ? (
      <Button component="a" disabled color={props.color} size={props.size}>
        {props.title}
      </Button>
    ) : (
      <Button component="a" color={props.color} size={props.size}>
        {props.title}
      </Button>
    )}
  </Link>
);

export default NextButton;
