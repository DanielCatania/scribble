import React from "react";
import NextLink from "next/link";
import Image from "./style";

export default function Logo() {
  return (
    <NextLink href="/">
      <Image src="/img/logo.svg" alt="Scribble" />
    </NextLink>
  );
}
