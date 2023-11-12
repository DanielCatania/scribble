import React from "react";
import { Main } from "./style";
import Text from "@/patterns/Text";
import Button from "@/patterns/Button";
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
      <Button
        color={{ palette: "neutral", tone: "250" }}
        background={{ palette: "secondary", tone: "050" }}
        size="large"
      >
        Click
      </Button>
      <Link href="/">Link</Link>
      <Link
        href="/"
        style={{
          background: { palette: "secondary", tone: "100" },
          size: "large",
        }}
      >
        Link
      </Link>
    </Main>
  );
}
