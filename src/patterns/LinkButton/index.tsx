import React from "react";
import Button, { ButtonProps } from "../Button";
import Link, { LinkProps } from "../Link";

interface LinkButtonProps extends LinkProps, ButtonProps {}

export default function LinkButton({
  children,
  background,
  size,
  color,
  inlineStyle,
  ...props
}: LinkButtonProps) {
  const style = { background, size, color, inlineStyle };
  return (
    <Link {...props}>
      <Button {...style}>{children}</Button>
    </Link>
  );
}
