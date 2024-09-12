import React from "react";

interface IText {
  children: React.ReactNode;
  styleOptions?: {
    fontFamily?: "default" | "display";
  };
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export default function Text({
  children,
  styleOptions = { fontFamily: "default" },
  as = "p",
}: IText) {
  const Tag = as;

  return <Tag className={`font-${styleOptions.fontFamily}`}>{children}</Tag>;
}
