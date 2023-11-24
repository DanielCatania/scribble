import React from "react";
import { useRouter } from "next/router";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
  children?: React.ReactNode;
  internal?: boolean;
}

export default function Link({
  children,
  internal = true,
  href,
  ...props
}: LinkProps) {
  if (internal) {
    const { query } = useRouter();

    const { idiom } = query;
    return (
      <NextLink href={`/${idiom}/${href}`} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}
