import React from "react";
import { IText } from "./type";

export default function HeadingOne({
  children,
  className = "",
  as = "p",
}: IText) {
  const Tag = as;

  return (
    <Tag
      className={`text-h01-xs md:text-h01-md lg:text-h01-lg font-bold ${className}`}
    >
      {children}
    </Tag>
  );
}
