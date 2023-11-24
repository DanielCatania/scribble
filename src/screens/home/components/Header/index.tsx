import React from "react";
import LinkButton from "@/patterns/LinkButton";
import Box from "@/patterns/Box";
import Logo from "@/components/Logo";

interface HeaderProps {
  content: {
    login: string;
    signUp: string;
  };
}

export default function Header({ content }: HeaderProps) {
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
        <LinkButton
          style={{ background: { palette: "secondary", tone: "100" } }}
          href="login"
        >
          {content.login}
        </LinkButton>
        <LinkButton href="sign-up">{content.signUp}</LinkButton>
      </Box>
    </Box>
  );
}
