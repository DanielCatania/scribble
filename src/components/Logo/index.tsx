import React from "react";
import Image from "@/patterns/Image";
import Link from "@/patterns/Link";

export default function Logo() {
  return (
    <Link href="">
      <Image
        src="/img/logo.svg"
        alt="Scribble"
        width={{ xs: "120px", md: "240px" }}
        height={{ xs: "40px", md: "80px" }}
      />
    </Link>
  );
}
