import React from "react";
import { useRouter } from "next/router";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
  children?: React.ReactNode;
  rel?: "external" | string;
}

export default function Link({ children, href, rel, ...props }: LinkProps) {
  if (rel !== "external") {
    const { query } = useRouter();

    const { idiom } = query;
    return (
      <NextLink href={`/${idiom}${href}`} rel={rel} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a href={href.toString()} rel={rel} target="_blank" {...props}>
      {children}
    </a>
  );
}
