import React from "react";
import Link from "@/patterns/Link";
import Box from "@/patterns/Box";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <Box
      inlineStyle={{
        xs: `margin: 0.5em 0.75em;`,
        md: `margin: 0 2em;`,
      }}
      as="header"
    >
      <Logo />
      <Box as="nav" inlineStyle={{ xs: `gap: 0.5em;`, md: `gap: 2em;` }}>
        <Link
          style={{ background: { palette: "secondary", tone: "100" } }}
          href="/login"
        >
          Login
        </Link>
        <Link href="/sign-up">Sign Up</Link>
      </Box>
    </Box>
  );
}
