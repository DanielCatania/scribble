import React from "react";
import NextLink from "next/link";
import Image from "@/patterns/Image";

export default function Logo() {
  return (
    <NextLink href="/">
      <Image
        src="/img/logo.svg"
        alt="Scribble"
        width={{ xs: "120px", md: "240px" }}
        height={{ xs: "40px", md: "80px" }}
      />
    </NextLink>
  );
}
