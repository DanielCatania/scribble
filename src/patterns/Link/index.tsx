import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import Button, { ButtonProps } from "../Button";

interface LinkProps extends NextLinkProps {
  children?: React.ReactNode;
  style?: ButtonProps;
}

export default function Link({ children, style, ...props }: LinkProps) {
  return (
    <NextLink {...props}>
      <Button {...style}>{children}</Button>
    </NextLink>
  );
}
