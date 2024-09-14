import React from "react";
import { IText } from "./type";

export default function HeadingTwo({
  children,
  className = "",
  as = "p",
}: IText) {
  const Tag = as;

  return (
    <Tag
      className={`font-special text-h02-xs md:text-h02-md lg:text-h02-lg ${className}`}
    >
      {children}
    </Tag>
  );
}
