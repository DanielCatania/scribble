import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface ILogo {
  long?: boolean;
  targetHome?: boolean;
  notPriority?: boolean; // defines that image loading should be a priority. When it is below the fold it should be set to true.
}

export default function Logo({
  long = false,
  targetHome = false,
  notPriority = false,
}: ILogo) {
  const href = targetHome ? "/" : "/app";
  const data = {
    src: long ? "/logo.svg" : "/short-logo.svg",
    width: long ? 300 : 75,
    height: long ? 100 : 85,
  };

  return (
    <Link href={href}>
      <Image
        src={data.src}
        alt="Scribble"
        width={data.width}
        height={data.height}
        priority={!notPriority!}
      />
    </Link>
  );
}
