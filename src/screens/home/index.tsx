import React from "react";
import Header from "./components/Header";
import Text from "@/patterns/Text";
import Section from "@/patterns/Section";
import Image from "@/patterns/Image";
import Box from "@/patterns/Box";
import Link from "@/patterns/Link";

export default function Home() {
  return (
    <>
      <Header />
      <Section as="main" inlineStyle={{ xs: `margin: 0;` }}>
        <Image
          src="/img/notes-xs.png"
          alt="Notepad image"
          inlineStyle={{ xs: `display: block;`, md: "display: none;" }}
        />
        <Section>
          <Text
            variant="display_01"
            as="h1"
            inlineStyle={{ md: `max-width: calc(100% - 150px);` }}
          >
            Scribble is an enabler.
          </Text>
          <Image
            src="/img/pen.svg"
            width={{ xs: "60px", md: "80px", lg: "120px" }}
            inlineStyle={{ xs: `order: 2;`, md: "order: 0;" }}
          />
          <Text inlineStyle={{ xs: `max-width: 70%;`, md: `max-width: none;` }}>
            Our mission is to facilitate your notes, help you organize your
            projects, goals...
          </Text>
        </Section>
        <Section inlineStyle={{ xs: `width: calc(100% - 100px);` }}>
          <Box
            inlineStyle={{
              xs: `
              width: 100%;
              flex-direction: column;
              text-align: center;
            `,
              md: `max-width: 350px;`,
              lg: `max-width: 450px;`,
            }}
          >
            <Text variant="heading_02">
              Try the most diverse functions for your organization.
            </Text>
            <Link href="/sign-up" style={{ size: "large" }}>
              Use Scribble
            </Link>
          </Box>
          <Image
            src="/img/notes-md.png"
            alt="Notepad image"
            maxWidth={{ md: "350px" }}
            inlineStyle={{ xs: `display: none;`, md: "display: block;" }}
          />
        </Section>
      </Section>
    </>
  );
}
