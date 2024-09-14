import React from "react";
import { IText } from "./type";

export default function Display({ children, className = "", as = "p" }: IText) {
  const Tag = as;

  return (
    <Tag
      className={`font-special text-d-xs md:text-d-md lg:text-d-lg ${className}`}
    >
      {children}
    </Tag>
  );
}
