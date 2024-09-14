import React from "react";
import { IText } from "./type";
import Display from "./Display";
import HeadingOne from "./HeadingOne";
import HeadingTwo from "./HeadingTwo";
import BodyOne from "./BodyOne";

export default function Text({ children, as = "p", className = "" }: IText) {
  const Tag = as;

  return (
    <Tag className={`text-b02-xs md:text-b02-md lg:text-b02-lg ${className}`}>
      {children}
    </Tag>
  );
}

Text.Display = Display;
Text.HeadingOne = HeadingOne;
Text.HeadingTwo = HeadingTwo;
Text.BodyOne = BodyOne;
