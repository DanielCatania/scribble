import React from "react";
import { IText } from "./type";

export default function BodyOne({ children, className = "", as = "p" }: IText) {
  const Tag = as;

  return (
    <Tag className={`text-b01-xs md:text-b01-md lg:text-b01-lg ${className}`}>
      {children}
    </Tag>
  );
}
