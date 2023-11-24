import React from "react";
import Button, { ButtonProps } from "../Button";
import Link, { LinkProps } from "../Link";

interface LinkButtonProps extends LinkProps {
  style?: ButtonProps;
}

export default function LinkButton({
  children,
  style,
  ...props
}: LinkButtonProps) {
  return (
    <Link {...props}>
      <Button {...style}>{children}</Button>
    </Link>
  );
}
