import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import Button, { ButtonProps, LargeButton } from "../Button";

interface LinkProps extends NextLinkProps {
  children?: React.ReactNode;
  type?: "default" | "large";
  style?: ButtonProps;
}

export default function Link({
  children,
  type = "default",
  style,
  ...props
}: LinkProps) {
  const Tag = type === "default" ? Button : LargeButton;

  return (
    <NextLink {...props}>
      <Tag {...style}>{children}</Tag>
    </NextLink>
  );
}
