import React from "react";
import Box from "@/patterns/Box";
import Logo from "./components/Logo";
import LinkButton from "@/patterns/LinkButton";

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <Box
      as="header"
      inlineStyle={{
        xs: `padding: 0.5em 1em;`,
        md: `padding: 0 2em;`,
      }}
    >
      <Logo />
      {children}
    </Box>
  );
}

interface RegistrationOptionsProps {
  links: {
    login: string;
    signUp: string;
  };
}

Header.RegistrationOptions = ({ links }: RegistrationOptionsProps) => {
  return (
    <Header>
      <Box as="nav" inlineStyle={{ xs: `gap: 0.5em;`, md: `gap: 2em;` }}>
        <LinkButton
          background={{ palette: "secondary", tone: "100" }}
          href="/login"
        >
          {links.login}
        </LinkButton>
        <LinkButton href="/sign-up">{links.signUp}</LinkButton>
      </Box>
    </Header>
  );
};
