import React from "react";
import Header from "./components/Header";
import Text from "@/patterns/Text";
import Section from "@/patterns/Section";
import Image from "@/patterns/Image";
import Box from "@/patterns/Box";
import LinkButton from "@/patterns/LinkButton";
import { PageContent } from "@/pages/[idiom]";
import Link from "@/patterns/Link";

interface Props {
  pageProps: { content: PageContent };
}

export default function Home({ pageProps }: Props) {
  const { content } = pageProps;
  return (
    <>
      <Header content={content.header} />
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
            {content.title}
          </Text>
          <Image
            src="/img/pen.svg"
            width={{ xs: "60px", md: "80px", lg: "120px" }}
            inlineStyle={{ xs: `order: 2;`, md: "order: 0;" }}
          />
          <Text inlineStyle={{ xs: `max-width: 70%;`, md: `max-width: none;` }}>
            {content.description}
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
            <Text variant="heading_02">{content.call}</Text>
            <LinkButton href="/sign-up" size="large">
              {content.buttonCall}
            </LinkButton>
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
