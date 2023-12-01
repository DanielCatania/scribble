import React from "react";
import Box from "@/patterns/Box";
import Logo from "../Logo";

export default function Header() {
  return (
    <Box
      as="header"
      inlineStyle={{
        xs: `padding: 0 1em;`,
        md: `padding: 0 2em;`,
      }}
    >
      <Logo />
    </Box>
  );
}
