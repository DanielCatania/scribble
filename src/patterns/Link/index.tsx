import React from "react";
import { useRouter } from "next/router";
import { LinkProps as NextLinkProps } from "next/link";
import { LinkStyle, LinkStyleProps, NextLinkStyle } from "./style";

export interface LinkProps extends NextLinkProps, LinkStyleProps {
  children?: React.ReactNode;
  rel?: "external" | string;
}

export default function Link({ children, href, rel, ...props }: LinkProps) {
  if (rel !== "external") {
    const { query } = useRouter();

    const { idiom } = query;
    return (
      <NextLinkStyle href={`/${idiom}${href}`} rel={rel} {...props}>
        {children}
      </NextLinkStyle>
    );
  }

  return (
    <LinkStyle href={href.toString()} rel={rel} target="_blank" {...props}>
      {children}
    </LinkStyle>
  );
}
