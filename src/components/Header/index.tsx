import React from "react";
import { Box, Nav } from "./style";
import Link from "@/patterns/Link";
import Logo from "./patterns/Logo";

export default function Header() {
  return (
    <Box>
      <Logo />
      <Nav>
        <Link
          style={{ background: { palette: "secondary", tone: "100" } }}
          href="/login"
        >
          Login
        </Link>
        <Link href="/sign-up">Sign Up</Link>
      </Nav>
    </Box>
  );
}
