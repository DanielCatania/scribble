import React from "react";
import { Main } from "./style";
import Text from "@/patterns/Text";
import Button, { LargeButton } from "@/patterns/Button";
import Link from "@/patterns/Link";

export default function Home() {
  return (
    <Main>
      <Text variant="display_01" color={{ palette: "secondary", tone: "150" }}>
        Scribble
      </Text>
      <Text variant="heading_01" color={{ palette: "primary", tone: "150" }}>
        Scribble
      </Text>
      <Text variant="heading_02" color={{ palette: "neutral", tone: "100" }}>
        Scribble
      </Text>
      <Text>Scribble</Text>
      <Text variant="body_02">Scribble</Text>
      <Button>Click</Button>
      <LargeButton
        color={{ palette: "neutral", tone: "250" }}
        background={{ palette: "secondary", tone: "050" }}
      >
        Click
      </LargeButton>
      <Link href="/">Link</Link>
      <Link
        href="/"
        type="large"
        style={{ background: { palette: "secondary", tone: "100" } }}
      >
        Link
      </Link>
    </Main>
  );
}
